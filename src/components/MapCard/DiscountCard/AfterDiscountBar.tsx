import styled from 'styled-components'
import { DiscountContainer } from '@components/MapCard/DiscountCard/DiscountBar.style'
import { colors } from '@styles/theme'

export default function AfterDiscountBar() {
  return (
    <DiscountContainer style={{ backgroundColor: '#fdd100' }}>
      할인 메뉴만 보기
    </DiscountContainer>
  )
}
