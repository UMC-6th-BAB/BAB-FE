import { MapWrapper } from '@components/MapCard/GoogleMapCard/Map.style'
import { useEffect, useRef, useState } from 'react'
import { mapStore } from '@stores/mapStore'
import storeInfoStore from '@stores/storeInfoStore'
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
  discountPrice: number | null
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
  const { storeInfos, tempAddStoreInfo, addMenu } = storeInfoStore()

  //가게 중복입력 방지함수
  function findRestaurant(id: number): boolean {
    let check = false
    storeInfos.forEach((info) => {
      if (info.id === id) {
        check = true
        return
      }
    })
    return check
  }

  //할인 확인 함수 o
  function findIsDiscount(id: number): storeInfo {
    let storeinfo: storeInfo
    storeinfo = { check: false, price: 0, discountPrice: null }

    storeInfos.forEach((info) => {
      if (info.id === id) {
        if (info.menu[0].isDiscounted === false) {
          storeinfo.check = false
          storeinfo.price = info.menu[0].price
          storeinfo.discountPrice = null
        } else {
          storeinfo.check = true
          storeinfo.price = info.menu[0].price
          storeinfo.discountPrice = info.menu[0].discountPrice
        }
      }
    })
    return storeinfo
  }

  //지도 초기화 o
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
      findPlaces()
    }
  }, [searchValue])

  //zoom값에 따라 아이콘 조절기능
  useEffect(() => {
    let storeinfo: storeInfo
    if (zoom < 17) {
      console.log(zoom)
      markers.forEach((marker) => {
        storeinfo = findIsDiscount(parseInt(marker.id))
        if (storeinfo.check === true) {
          marker.content = smallYellowIcon()
        } else {
          marker.content = smallGreyIcon()
        }
      })
    } else {
      markers.forEach((marker) => {
        storeinfo = findIsDiscount(parseInt(marker.id))
        if (storeinfo.check === true) {
          marker.content = yellowIcon(
            storeinfo.price,
            storeinfo.discountPrice as number,
          )
        } else {
          marker.content = greyIcon(storeinfo.price)
        }
      })
    }
  }, [zoom])

  //마커 삽입기능
  useEffect(() => {
    ;(async () => {
      if (storeInfos.length) {
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker',
        )) as google.maps.MarkerLibrary
        storeInfos.forEach((info) => {
          const logo =
            info.menu[0].discountPrice === null
              ? greyIcon(info.menu[0].price)
              : yellowIcon(info.menu[0].price, info.menu[0].discountPrice)
          const markerView = new AdvancedMarkerElement({
            map: googleMap,
            position: new google.maps.LatLng(info.lat as number, info.lng),
            title: info.name,
            content: logo,
          })
          markerView.id = info.id.toString()
          addMarker(markerView)
        })
      } else {
        console.log('없어 ㅋㅋ')
      }
    })()
  }, [storeInfos])

  //가게검색 기능
  async function findPlaces() {
    const { Place } = (await google.maps.importLibrary(
      'places',
    )) as google.maps.PlacesLibrary

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
        if (findRestaurant(parseInt(place.id)) === false) {
          tempAddStoreInfo(
            parseInt(place.id),
            place.displayName as string,
            place.location?.lat(),
            place.location?.lng(),
          )
          addMenu(parseInt(place.id), '햄버거')
          //setDiscountPrice(place.id)
        }
      })
    } else {
      console.log('No results')
    }
  }

  return <MapWrapper ref={ref} id="map" />
}
