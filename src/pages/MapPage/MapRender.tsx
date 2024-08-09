import { useState, useEffect, ReactElement } from 'react'
import { SyncLoader } from 'react-spinners'
import { MapContainer, SpinnerContainer } from '@pages/MapPage/MapRender.style'
import Map from '@components/MapCard/GoogleMapCard/Map'
import SearchBar from '@components/MapCard/SearchCard/SearchBar'
import AfterSearchBar from '@components/MapCard/SearchCard/AfterSearchBar'
import { mapStore } from '@stores/mapStore'
import storeInfoStore from '@stores/storeInfoStore'
import { Wrapper, Status } from '@googlemaps/react-wrapper'

//////////////  최상부 컨테이너  //////////////

const render = (status: Status): ReactElement => {
  if (status === Status.FAILURE) {
    return <div>에러 발생!!</div>
  }
  return <div>로딩 완료!!</div>
}

export default function MapRender() {
  const { storeInfos } = storeInfoStore()
  const { googleMap } = mapStore()
  const [markers, setMarkers] = useState<
    google.maps.marker.AdvancedMarkerElement[]
  >([])
  const [filterCheck, setFilterCheck] = useState<boolean>(false)
  const [searchValue, setSearchValue] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)
  const [loading, setLoading] = useState<boolean>(true)

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

  function findDiscount(id: number): boolean {
    let check = false
    storeInfos.forEach((info) => {
      if (info.id === id) {
        if (info.menu[0].discountPrice !== null) {
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
        const check = findDiscount(parseInt(marker.id))
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
        const check = findDiscount(parseInt(marker.id))
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <MapContainer>
        {loading ? (
          <SpinnerContainer>
            <SyncLoader color="#4f7233" margin={5} />
          </SpinnerContainer>
        ) : (
          <Wrapper apiKey={import.meta.env.VITE_API_KEY} render={render}>
            <Map
              markers={markers}
              addMarker={addMarker}
              clearMarker={clearMarker}
              searchValue={searchValue}
            />
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
          </Wrapper>
        )}
      </MapContainer>
    </>
  )
}
