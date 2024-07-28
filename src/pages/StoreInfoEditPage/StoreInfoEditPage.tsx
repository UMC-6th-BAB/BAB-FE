import React from 'react'
import {
  PageContainer,
  Header,
  BackButton,
  Title,
  EditOptions,
  OptionButton,
  NextButton,
} from '@pages/StoreInfoEditPage/StoreInfoEditPage.style'
import { useNavigate } from 'react-router-dom'

export default function StoreInfoEditPage() {
  const navigate = useNavigate()

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate('/manager')}>&lt;</BackButton>
        <Title>가게 정보 수정</Title>
      </Header>
      <EditOptions>
        <OptionButton type="default">기본 정보</OptionButton>
        <OptionButton type="default">영업 시간</OptionButton>
        <OptionButton type="default">메뉴 등록</OptionButton>
        <OptionButton type="destructive">가게 삭제</OptionButton>
      </EditOptions>
      <NextButton onClick={() => navigate('/next-page')}>다음</NextButton>
    </PageContainer>
  )
}
