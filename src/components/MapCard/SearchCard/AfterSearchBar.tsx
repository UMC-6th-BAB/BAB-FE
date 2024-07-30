import styled from 'styled-components'
import { useEffect } from 'react'
import AfterDiscountBar from '@components/MapCard/DiscountCard/AfterDiscountBar'
import { IoIosArrowBack } from 'react-icons/io'
import { searchStore } from '@stores/searchStore'
import restaurantInfoStore from '@stores/restaurentStore'
import { mapStore } from '@stores/mapStore'

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  background-color: white;
  justify-content: left;
  margin-top: 30px;
  z-index: 1;
`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  background-color: white;
`
const IconWrapper = styled.div`
  padding-left: 10px;
  display: flex;
  color: black;
  width: 10%;
  font-size: 40px;
  cursor: pointer;
`
const ContentWrapper = styled.div`
  display: flex;
  padding-left: 10px;
  font-size: 20px;
  color: black;
  width: 90%;
`
const DiscountWrapper = styled.div`
  display: flex;
  width: 80%;
  margin-top: 30px;
  padding-left: 20px;
  background-color: none;
`
const DiscountStyle = styled.div`
  width: 35%;
  cursor: pointer;
`
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
    <Container>
      <Wrapper>
        <IconWrapper
          onClick={() => {
            setSearchValue('')
          }}
        >
          <IoIosArrowBack />
        </IconWrapper>
        <ContentWrapper>{searchValue}</ContentWrapper>
      </Wrapper>
      <DiscountWrapper>
        <DiscountStyle onClick={() => setFilterCheck()}>
          <AfterDiscountBar />
        </DiscountStyle>
      </DiscountWrapper>
    </Container>
  )
}
