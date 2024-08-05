import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RestaurantList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 19px;
`

export const Restaurant = styled.div`
  width: 100%;
  padding: 22px 24px;
  box-sizing: border-box;

  position: relative;
  display: flex;
  flex-direction: column;
  align-items: start;

  background-color: #ffffff;
`
export const DiscountType = styled.div`
  font-weight: Bold;
  font-size: 14px;
  line-height: 24px;

  color: #767676;
`
export const RestaurantName = styled.div`
  font-weight: Bold;
  font-size: 20px;
  line-height: 24px;

  padding-bottom: 28px;

  color: #000000;
`
export const GoToRestaurantBtn = styled.button`
  position: absolute;
  top: 32px;
  right: 24px;

  width: 79px;
  height: 28px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  border: none;
  border-radius: 10px;

  font-weight: 700;
  font-size: 12px;

  background: #fdd100;
  color: #ffffff;
`

export const BackArrow = styled(Link)``

export const MenuList = styled.div`
  box-sizing: border-box;
  width: 100%;
  font-size: 14px;
  line-height: 24px;
  padding-left: 6px;
`

export const Menu = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const Dish = styled.div`
  max-width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-weight: Medium;
`
export const Dash = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px dashed #767676;
  margin: auto 9px;
`
export const DiscountedPrice = styled.div`
  margin-right: 12px;

  font-weight: Bold;
`
export const Price = styled.div`
  text-decoration: line-through;

  font-weight: Light;
  color: #767676;
`
