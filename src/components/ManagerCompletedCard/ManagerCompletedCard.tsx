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
import managerRegisterInfoStore from '@stores/managerRegisterInfoStore'
import { useNavigate } from 'react-router-dom'

export default function ManagerCompletedCard() {
  const { restaurantInfo } = restaurantInfoStore()
  const { managerName } = managerRegisterInfoStore()
  const navigate = useNavigate()

  return (
    <CardContainer>
      <CardTitle>{managerName} 사장님의</CardTitle>
      <CardSubtitle>{restaurantInfo.name}</CardSubtitle>
      <CardContent>
        <CardButton onClick={() => navigate('/discount-event')}>
          <span>할인행사</span>
          <span>진행하기</span>
        </CardButton>
        <CardButton onClick={() => navigate('/discountRecord')}>
          <span>진행했던</span>
          <span>할인행사 보기</span>
        </CardButton>
      </CardContent>
      <EditButton>
        가게 정보 수정하기
        <ArrowIcon>&gt;</ArrowIcon>
      </EditButton>
    </CardContainer>
  )
}
