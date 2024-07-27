import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: #ffee9c;
  color: #767676;
  border-radius: 20px;
  padding: 5px;
  padding-top: 7px;
  padding-bottom: 7px;
  font-size: 13px;
  box-shadow: 0 0 3px;
  z-index: 1;
`
export default function DiscountBar() {
  return <Container>오늘의 할인 메뉴</Container>
}
