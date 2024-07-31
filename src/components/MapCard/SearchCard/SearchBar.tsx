import { useState, useEffect } from 'react'
import {
  SearchBarContainer,
  SearchBarDiscountWrapper,
  SearchBarIconWrapper,
  SearchBarInput,
  SearchBarWrapper,
  SearchBarDiscountStyle,
} from '@components/MapCard/SearchCard/SearchBar.style'
import DiscountBar from '@components/MapCard/DiscountCard/DiscountBar'
import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'
import { searchStore } from '@stores/searchStore'
import restaurantInfoStore from '@stores/restaurentStore'
import { mapStore } from '@stores/mapStore'

export default function SearchBar() {
  const [data, setData] = useState('')
  const { setSearchValue } = searchStore()
  const { tempInfos } = restaurantInfoStore()
  const { markers, googleMap, filterCheck, setFilterCheck } = mapStore()
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
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

  function filterMarker() {
    if (markers.length) {
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
    <SearchBarContainer>
      <SearchBarWrapper>
        <SearchBarIconWrapper
          onClick={() => {
            setSearchValue(data)
          }}
        >
          <IoIosSearch />
        </SearchBarIconWrapper>
        <SearchBarInput
          type="text"
          placeholder="먹고 싶은 메뉴를 검색해보세요"
          value={data}
          onChange={(e) => handleValue(e)}
        />
      </SearchBarWrapper>
      <SearchBarDiscountWrapper>
        <SearchBarDiscountStyle onClick={() => setFilterCheck()}>
          <DiscountBar />
        </SearchBarDiscountStyle>
      </SearchBarDiscountWrapper>
    </SearchBarContainer>
  )
}
