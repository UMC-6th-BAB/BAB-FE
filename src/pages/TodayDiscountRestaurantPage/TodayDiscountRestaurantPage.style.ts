import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TodayDiscountRestaurantPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #f8f8f8;
  padding: 20px 0;
`

export const Title = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 23px;

  font-size: 22px;
`

export const TitleText = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #767676;
`

export const BackArrow = styled(Link)`
  width: 10.5px;
  height: 20px;
  color: #111111;
`
