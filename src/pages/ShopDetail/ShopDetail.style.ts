import styled from 'styled-components'

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* 전체 높이를 100vh로 설정 */
`

export const MenuHeader = styled.div`
  position: fixed;
  top: 80px; /* 화면 상단에 고정 */
  width: 400px;
  z-index: 2; /* 다른 요소 위로 보이도록 설정 */
  text-align: left;
`

export const BkImg = styled.div<{ $imgsrc: string }>`
  height: 244px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    ),
    url('${(props) => props.$imgsrc}');
  background-size: cover;
  position: relative;
  z-index: 1;
`

export const ShopTitle = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #ffffff;
  text-align: left;
  padding: 0px 20px;
  position: relative;
  top: 160px;
`

export const EventContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 23px;
  position: relative;
  top: 160px;
`

export const Event = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #fdd100;
`

export const LinkBtn = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
`

export const MenuBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 15px;
  background-color: #ffffff;
  position: relative;
  top: 310px;
  margin-top: -10px; /* MenuHeader와 겹치도록 조정 */
  z-index: 3;
`

export const TodayEvent = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin: 15px 20px;
  text-align: left;
`

export const Coupon = styled.div`
  display: flex;
  text-align: left;
  margin-left: 30px;
`

export const CouponImg = styled.img`
  cursor: pointer;
`

export const CouponInfoContainer = styled.div`
  margin-left: 20px;
`

export const CouponInfoTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #767676;
`

export const CouponInfoBody = styled.div`
  font-size: 14px;
  font-weight: 600;
`

export const MenuContainer = styled.div``

export const Line = styled.div`
  background-color: #f8f8f8;
  width: 400px;
  height: 2px;
  margin: 20px 0px;
`
