import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  background-color: white;
  color: #767676;
  border-radius: 20px;
  padding: 9px 5px 9px 5px;
  font-size: 13px;
  box-shadow: 0 0 5px;
  text-align: center;
  z-index: 1;
`

export default function AfterDiscountBar() {
  return <Container>할인 메뉴만 보기</Container>
}
