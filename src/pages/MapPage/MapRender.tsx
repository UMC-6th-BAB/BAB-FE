import Map from '@components/MapCard/GoogleMapCard/Map'
import SearchBar from '@components/MapCard/SearchCard/SearchBar'
import AfterSearchBar from '@components/MapCard/SearchCard/AfterSearchBar'
import restaurantInfoStore from '@stores/restaurentStore'
import { mapStore } from '@stores/mapStore'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import { useState, useEffect } from 'react'

const render = (status: Status) => {
  switch (status) {
    case Status.LOADING:
      return <>로딩중...</>
    case Status.FAILURE:
      return <>에러 발생</>
    case Status.SUCCESS:
      return null
    default:
      return null
  }
}

export default function MapRender() {
  const { tempInfos } = restaurantInfoStore()
  const { googleMap } = mapStore()
  const [markers, setMarkers] = useState<
    google.maps.marker.AdvancedMarkerElement[]
  >([])
  const [filterCheck, setFilterCheck] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')

  function addMarker(marker: google.maps.marker.AdvancedMarkerElement): void {
    setMarkers((prev) => [...prev, marker])
  }

  function clearMarker(): void {
    setMarkers(() => {
      return []
    })
  }

  function handleFilterCheck(): void {
    setFilterCheck((prev) => !prev)
  }

  function handleSearchValue(value: string): void {
    setSearchValue(value)
  }

  function findDiscount(id: string): boolean {
    let check = false
    tempInfos.forEach((info) => {
      if (info.id === id) {
        if (info.menus[0].discountPrice !== null) {
          check = true
        } else {
          check = false
        }
      }
    })
    return check
  }

  function filterMarker(): void {
    if (markers.length) {
      console.log('필터 실행')
      markers.forEach((marker) => {
        const check = findDiscount(marker.id)
        if (check === false) {
          marker.map = null
        }
      })
    }
  }

  function reRenderMarker(): void {
    if (markers.length) {
      console.log('리렌더 실행')
      markers.forEach((marker) => {
        const check = findDiscount(marker.id)
        if (check === false) {
          marker.map = googleMap
        }
      })
    }
  }

  useEffect(() => {
    if (filterCheck === true) {
      filterMarker()
    } else {
      reRenderMarker()
    }
  }, [filterCheck])

  useEffect(() => {
    if (searchValue) {
      if (filterCheck === true) {
        handleFilterCheck()
      }
    }
  }, [searchValue])

  return (
    <Wrapper apiKey={import.meta.env.VITE_API_KEY} render={render}>
      {searchValue === '' ? (
        <SearchBar
          handleFilterCheck={handleFilterCheck}
          handleSearchValue={handleSearchValue}
        />
      ) : (
        <AfterSearchBar
          handleFilterCheck={handleFilterCheck}
          searchValue={searchValue}
          handleSearchValue={handleSearchValue}
        />
      )}
      <Map
        markers={markers}
        addMarker={addMarker}
        clearMarker={clearMarker}
        searchValue={searchValue}
      />
    </Wrapper>
  )
}
