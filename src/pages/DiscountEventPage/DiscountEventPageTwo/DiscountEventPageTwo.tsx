import React from 'react'
import {
  PageContainer,
  Header,
  Title,
  BackButton,
  EventForm,
  Label,
  Textarea,
  MenuTable,
  MenuTableBody,
  MenuRow,
  MenuLabel,
  CheckboxWrapper,
  SubmitButton,
  DiscountDataWrapper,
} from '@pages/DiscountEventPage/DiscountEventPageTwo/DiscountEventPageTwo.style'
import { useNavigate } from 'react-router-dom'

export default function DiscountEventPageTwo() {
  const navigate = useNavigate()
  return (
    <>
      <PageContainer>
        <Header>
          <BackButton onClick={() => navigate('/discount-event')}>
            &lt;
          </BackButton>
          <Title>할인 행사 진행하기</Title>
        </Header>
        <DiscountDataWrapper>
          <Label>행사 문구</Label>
          <EventForm>
            <Label>직접 입력하기</Label>
            <hr />
            <Textarea placeholder="행사 안내 문구를 입력해주세요." />
            <Label>선택하기</Label>
            <MenuTable>
              <MenuTableBody>
                <MenuRow>
                  <MenuLabel>밥이득 김치찌개 전 메뉴 1000원 할인</MenuLabel>
                  <CheckboxWrapper>
                    <input type="checkbox" id="discount1" />
                    <label htmlFor="discount1"></label>
                  </CheckboxWrapper>
                </MenuRow>
                <MenuRow>
                  <MenuLabel>밥이득 김치찌개에서 할인행사 합니다!</MenuLabel>
                  <CheckboxWrapper>
                    <input type="checkbox" id="discount2" />
                    <label htmlFor="discount2"></label>
                  </CheckboxWrapper>
                </MenuRow>
              </MenuTableBody>
            </MenuTable>
          </EventForm>
        </DiscountDataWrapper>
      </PageContainer>
      <SubmitButton onClick={() => navigate('/manager')}>
        근처 학생들에게 알림 보내기
      </SubmitButton>
    </>
  )
}
