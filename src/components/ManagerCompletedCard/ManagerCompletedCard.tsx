import React from 'react'

import storeInfoStore from '@stores/storeInfoStore'
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
  const { storeInfos } = storeInfoStore()
  const { managerName } = managerRegisterInfoStore()
  const navigate = useNavigate()

  return (
    <CardContainer>
      {storeInfos && storeInfos.length > 0 ? (
        <>
          <CardTitle>{managerName} 사장님의</CardTitle>
          <CardSubtitle>{storeInfos[0].name}</CardSubtitle>
          <CardContent>
            <CardButton onClick={() => navigate('/discount-event')}>
              <span>할인행사</span>
              <span>진행하기</span>
            </CardButton>
            <CardButton onClick={() => navigate('/discount-record')}>
              <span>진행했던</span>
              <span>할인행사 보기</span>
            </CardButton>
          </CardContent>
          <EditButton onClick={() => navigate('/storeInfo-edit')}>
            가게 정보 수정하기
            <ArrowIcon>&gt;</ArrowIcon>
          </EditButton>
        </>
      ) : (
        <>
          <CardTitle>{managerName} 사장님의</CardTitle>
          <CardSubtitle>등록된 가게가 없습니다.</CardSubtitle>
        </>
      )}
    </CardContainer>
  )
}
