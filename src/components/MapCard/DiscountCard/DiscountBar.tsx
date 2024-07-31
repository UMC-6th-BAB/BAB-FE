import styled from 'styled-components'
import { DiscountContainer } from '@components/MapCard/DiscountCard/DiscountBar.style'

export default function DiscountBar() {
  return (
    <DiscountContainer style={{ backgroundColor: '#e7f0ed' }}>
      오늘의 할인 메뉴
    </DiscountContainer>
  )
}
