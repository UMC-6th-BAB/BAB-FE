import styled from 'styled-components'
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
  height: 3%;
  background-color: white;
  justify-content: left;
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
    <Container>
      <Wrapper>
        <IconWrapper onClick={() => setSearchValue('')}>
          <IoIosArrowBack />
        </IconWrapper>
        <ContentWrapper>{searchValue}</ContentWrapper>
      </Wrapper>
      <DiscountWrapper>
        <DiscountStyle onClick={() => filterDiscount()}>
          <AfterDiscountBar />
        </DiscountStyle>
      </DiscountWrapper>
    </Container>
  )
}
