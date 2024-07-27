import { GoogleMap } from '@react-google-maps/api'
import { useEffect, useRef, useState } from 'react'
import { useStore } from '../stores/mapStore'
import { SearchStore } from '../stores/searchStore'
import restaurantInfoStore from '../stores/restaurentStore'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyle'
import greyIcon from '../assets/greyIcon'
import yellowIcon from '../assets/yellowIcon'

export default function Map() {
  const ref = useRef<HTMLDivElement>(null)
  const { lat, lng, googleMap, setGoogleMap, addMarker, clearMarker, markers } =
    useStore()
  const SearchValue = SearchStore((state) => state.searchValue)
  const {
    infos,
    tempInfos,
    setName,
    setDiscount,
    addRestaurantInfo,
    addMenu,
    clearInfo,
    clearTempInfo,
    restaurantInfo,
    setDisplayMarker,
    addTempInfo,
    addTempMenu,
    setIsDiscount,
  } = restaurantInfoStore()

  //가게 중복입력 방지함수
  function findRestaurant(id: string): boolean {
    let check = false
    infos.forEach((info) => {
      if (info.id === id) {
        check = true
        return
      }
    })
    return check
  }

  //지도 초기화
  useEffect(() => {
    if (ref.current) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: { lat, lng },
        zoom: 16,
        disableDefaultUI: true,
        mapId: 'eb4ca83b18a77f42',
      })
      setGoogleMap(initialMap)
    }
  }, [])

  //이전 검색마커 삭제기능 && 검색기능
  useEffect(() => {
    if (SearchValue) {
      if (markers.length !== 0) {
        console.log(markers.length)
        markers.forEach((marker) => {
          marker.map = null
        })
        clearMarker()
      }
      clearTempInfo()
      findPlaces()
    }
  }, [SearchValue])

  //마커 삽입기능
  useEffect(() => {
    ;(async () => {
      if (tempInfos.length) {
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker',
        )) as google.maps.MarkerLibrary
        tempInfos.forEach((info) => {
          const logo =
            info.menus[0].price > 50
              ? greyIcon(info.menus[0].price)
              : yellowIcon(info.menus[0].price)
          const markerView = new AdvancedMarkerElement({
            map: googleMap,
            position: new google.maps.LatLng(info.lat, info.lng),
            title: info.name,
            content: logo,
          })
          markerView.id = info.id
          addMarker(markerView)
        })
      } else {
        console.log('없어 ㅋㅋ')
      }
    })()
  }, [tempInfos])

  //가게정보 출력 && 할인여부 추가
  useEffect(() => {
    if (infos.length) {
      infos.forEach((info) => {
        console.log(info)
        info.menus.forEach((menu) => {
          console.log(info.name + ' 가격: ' + menu.price)
          console.log(info.lat + ' ' + info.lng)
        })
      })
    }
  }, [infos])

  //가게검색 기능
  async function findPlaces() {
    const { Place } = (await google.maps.importLibrary(
      'places',
    )) as google.maps.PlacesLibrary
    const { LatLngBounds } = (await google.maps.importLibrary(
      'core',
    )) as google.maps.CoreLibrary

    const request = {
      textQuery: SearchValue,
      fields: ['displayName', 'location', 'businessStatus'],
      includedType: 'restaurant',
      maxResultCount: 10,
      region: 'kr',
      language: 'ko',
      locationRestriction: googleMap.getBounds(),
      useStrictTypeFiltering: false,
    }

    const { places } = await Place.searchByText(request)
    if (places.length) {
      places.forEach((place) => {
        //진짜 가게 정보 삽입기능
        if (findRestaurant(place.id) === false) {
          addRestaurantInfo(
            place.displayName,
            place.id,
            place.location.lat(),
            place.location.lng(),
          )
          addMenu(place.id, '햄버거')
          setIsDiscount(place.id)
        }
        //가짜 가게 정보 삽입기능
        addTempInfo(
          place.displayName,
          place.id,
          place.location.lat(),
          place.location.lng(),
        )
        addTempMenu(place.id, '햄버거')
      })
    } else {
      console.log('No results')
    }
  }

  return (
    <>
      <div ref={ref} id="map" style={{ minHeight: '97vh' }} />
    </>
  )
}
