import styled from 'styled-components'
import {
  AfterSearchBarContainer,
  AfterSearchBarContentWrapper,
  AfterSearchBarIconWrapper,
  AfterSearchBarDiscountStyle,
  AfterSearchBarDiscountWrapper,
  AfterSearchBarWrapper,
} from '@components/MapCard/SearchCard/SearchBar.style'
import { useEffect } from 'react'
import AfterDiscountBar from '@components/MapCard/DiscountCard/AfterDiscountBar'
import { IoIosArrowBack } from 'react-icons/io'
import { searchStore } from '@stores/searchStore'
import restaurantInfoStore from '@stores/restaurentStore'
import { mapStore } from '@stores/mapStore'

export default function AfterSearchBar() {
  const { searchValue, setSearchValue } = searchStore()
  const { tempInfos } = restaurantInfoStore()
  const { markers, googleMap, filterCheck, setFilterCheck } = mapStore()

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

  function filterMarker() {
    if (markers.length) {
      console.log('필터 실행됨')
      markers.forEach((marker) => {
        const check = findDiscount(marker.id)
        if (check === false) {
          marker.map = null
        }
      })
    }
  }

  function reRenderMarker() {
    if (markers.length) {
      console.log('리렌더 실행됨')
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

  return (
    <AfterSearchBarContainer>
      <AfterSearchBarWrapper>
        <AfterSearchBarIconWrapper
          onClick={() => {
            setSearchValue('')
          }}
        >
          <IoIosArrowBack />
        </AfterSearchBarIconWrapper>
        <AfterSearchBarContentWrapper>
          {searchValue}
        </AfterSearchBarContentWrapper>
      </AfterSearchBarWrapper>
      <AfterSearchBarDiscountWrapper>
        <AfterSearchBarDiscountStyle onClick={() => setFilterCheck()}>
          <AfterDiscountBar />
        </AfterSearchBarDiscountStyle>
      </AfterSearchBarDiscountWrapper>
    </AfterSearchBarContainer>
  )
}
