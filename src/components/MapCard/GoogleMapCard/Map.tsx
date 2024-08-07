import {
  MapContainer,
  MapWrapper,
} from '@components/MapCard/GoogleMapCard/Map.style'
import { useEffect, useRef, useState } from 'react'
import { mapStore } from '@stores/mapStore'
import restaurantInfoStore from '@stores/restaurentStore'
import greyIcon from '@assets/mapIcon/greyIcon'
import smallGreyIcon from '@assets/mapIcon/smallGreyIcon'
import yellowIcon from '@assets/mapIcon/yellowIcon'
import smallYellowIcon from '@assets/mapIcon/smallYellowIcon'

type Props = {
  markers: google.maps.marker.AdvancedMarkerElement[]
  searchValue: string
  addMarker: (marker: google.maps.marker.AdvancedMarkerElement) => void
  clearMarker: () => void
}

interface storeInfo {
  price: number
  discountPrice: number
  check: boolean
}

export default function Map({
  markers,
  addMarker,
  clearMarker,
  searchValue,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const { lat, lng, googleMap, setGoogleMap } = mapStore()
  const [zoom, setZoom] = useState<number | undefined>(16)
  const {
    infos,
    tempInfos,
    addRestaurantInfo,
    addMenu,
    clearTempInfo,
    addTempInfo,
    addTempMenu,
    setDiscountPrice,
    setTempDiscountPrice,
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

  function findIsDiscount(id: string): storeInfo {
    let storeinfo: storeInfo
    storeinfo = { check: false, price: 0, discountPrice: 0 }

    tempInfos.forEach((info) => {
      if (info.id === id) {
        if (info.menus[0].discountPrice === null) {
          storeinfo.check = false
          storeinfo.price = info.menus[0].price
          storeinfo.discountPrice = 0
        } else {
          storeinfo.check = true
          storeinfo.price = info.menus[0].price
          storeinfo.discountPrice = info.menus[0].discountPrice
        }
      }
    })
    return storeinfo
  }

  //지도 초기화
  useEffect(() => {
    if (ref.current) {
      const initialMap = new window.google.maps.Map(ref.current, {
        center: { lat, lng },
        zoom: 17,
        disableDefaultUI: true,
        mapId: 'eb4ca83b18a77f42',
      })
      setGoogleMap(initialMap)

      initialMap.addListener('zoom_changed', () => {
        setZoom(initialMap.getZoom())
      })
    }
  }, [])

  //이전 검색마커 삭제기능 && 검색기능
  useEffect(() => {
    if (searchValue) {
      console.log('검색 실행')
      if (markers.length !== 0) {
        console.log('마커 수 : ' + markers.length)
        markers.forEach((marker) => {
          marker.map = null
        })
        clearMarker()
      }
      clearTempInfo()
      findPlaces()
    }
  }, [searchValue])

  //zoom값에 따라 아이콘 조절기능
  useEffect(() => {
    let storeinfo: storeInfo
    if (zoom < 17) {
      console.log(zoom)
      markers.forEach((marker) => {
        storeinfo = findIsDiscount(marker.id)
        if (storeinfo.check === true) {
          marker.content = smallYellowIcon()
        } else {
          marker.content = smallGreyIcon()
        }
      })
    } else {
      markers.forEach((marker) => {
        storeinfo = findIsDiscount(marker.id)
        if (storeinfo.check === true) {
          marker.content = yellowIcon(storeinfo.price, storeinfo.discountPrice)
        } else {
          marker.content = greyIcon(storeinfo.price)
        }
      })
    }
  }, [zoom])

  //마커 삽입기능
  useEffect(() => {
    ;(async () => {
      if (tempInfos.length) {
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker',
        )) as google.maps.MarkerLibrary
        tempInfos.forEach((info) => {
          const logo =
            info.menus[0].discountPrice === null
              ? greyIcon(info.menus[0].price)
              : yellowIcon(info.menus[0].price, info.menus[0].discountPrice)
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

  //가게정보 출력
  /*useEffect(() => {
    if (infos.length) {
      infos.forEach((info) => {
        console.log(info)
        info.menus.forEach((menu) => {
          console.log(info.name + ' 가격: ' + menu.price)
          console.log(info.lat + ' ' + info.lng)
        })
      })
    }
  }, [infos])*/

  //가게검색 기능
  async function findPlaces() {
    const { Place } = (await google.maps.importLibrary(
      'places',
    )) as google.maps.PlacesLibrary
    /*const { LatLngBounds } = (await google.maps.importLibrary(
      'core',
    )) as google.maps.CoreLibrary*/

    const request = {
      textQuery: searchValue,
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
          setDiscountPrice(place.id)
        }
        //가짜 가게 정보 삽입기능
        addTempInfo(
          place.displayName,
          place.id,
          place.location.lat(),
          place.location.lng(),
        )
        addTempMenu(place.id, '햄버거')
        setTempDiscountPrice(place.id)
      })
    } else {
      console.log('No results')
    }
  }

  return (
    <MapContainer>
      <MapWrapper ref={ref} id="map" />
    </MapContainer>
  )
}
