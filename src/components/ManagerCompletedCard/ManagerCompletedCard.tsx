import React from 'react'

import restaurantInfoStore from '@stores/restaurantInfoStore'
import {
  CardContainer,
  CardTitle,
  CardContent,
  CardSubtitle,
  CardButton,
  EditButton,
  ArrowIcon,
} from './ManagerCompletedCard.style'

export default function ManagerCompletedCard() {
  const { restaurantInfo } = restaurantInfoStore()

  return (
    <CardContainer>
      <CardTitle>고서현 사장님의</CardTitle>
      <CardSubtitle>{restaurantInfo.name}</CardSubtitle>
      <CardContent>
        <CardButton>할인행사 진행하기</CardButton>
        <CardButton>진행했던 할인행사 보기</CardButton>
      </CardContent>
      <EditButton>
        가게 정보 수정하기
        <ArrowIcon>&gt;</ArrowIcon>
      </EditButton>
    </CardContainer>
  )
}
