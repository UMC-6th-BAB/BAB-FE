import { useState } from 'react'
import DiscountBar from '@components/MapCard/DiscountCard/DiscountBar'
import styled from 'styled-components'
import { IoIosSearch } from 'react-icons/io'
import { searchStore } from '@stores/searchStore'
import restaurantInfoStore from '@stores/restaurentStore'
import { mapStore } from '@stores/mapStore'

const SearchBarContainer = styled.div`
  position: absolute;
  flex-direction: column;
  display: flex;
  width: 100%;
  background-color: none;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
const Wrapper = styled.div`
  display: flex;
  width: 80%;
  margin-top: 30px;
  box-shadow: 0 0 3px;
  border-radius: 20px;
  color: grey;
`
const SearchInput = styled.input`
  width: 90%;
  padding: 3%;
  display: flex;
  background-color: white;
  color: black;
  font-weight: 500;
  font-size: 13px;
  border: none;
  border-radius: 0 20px 20px 0;
  &::placeholder {
    color: grey;
    text-align: left;
    font-weight: 500;
  }
  &:focus {
    outline: none;
    &::placeholder {
      color: transparent;
    }
  }
`
const IconWrapper = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: right;
  background-color: white;
  border-radius: 20px 0 0 20px;
  font-size: 18px;
  color: grey;
  cursor: pointer;
`
const DiscountWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  border-radius: 20px;
  justify-content: left;
  width: 80%;
`
const DiscountStyle = styled.div`
  width: 35%;
  cursor: pointer;
`
export default function SearchBar() {
  const [data, setData] = useState('')
  const { setSearchValue } = searchStore()
  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value)
  }
  const { tempInfos } = restaurantInfoStore()
  const { markers } = mapStore()

  function findPrice(id: string): number {
    let num = -1
    tempInfos.forEach((info) => {
      if (info.id === id) {
        num = info.menus[0].price
      }
    })
    return num
  }
  function filterDiscount() {
    if (markers.length) {
      markers.forEach((marker) => {
        const num = findPrice(marker.id)
        if (num > 50) {
          marker.map = null
        }
      })
    }
  }
  return (
    <SearchBarContainer>
      <Wrapper>
        <IconWrapper onClick={() => setSearchValue(data)}>
          <IoIosSearch />
        </IconWrapper>
        <SearchInput
          type="text"
          placeholder="먹고 싶은 메뉴를 검색해보세요"
          value={data}
          onChange={(e) => handleValue(e)}
        />
      </Wrapper>
      <DiscountWrapper>
        <DiscountStyle onClick={() => filterDiscount()}>
          <DiscountBar />
        </DiscountStyle>
      </DiscountWrapper>
    </SearchBarContainer>
  )
}
