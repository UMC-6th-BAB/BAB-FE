import React from 'react'
import {
  PageContainer,
  Header,
  Title,
  BackButton,
  EventForm,
  Label,
  SpanLabel,
  DateInput,
  MenuTable,
  MenuRow,
  MenuLabel,
  PriceInput,
  SubmitButton,
  DateDataWrapper,
  DateInputWrapper,
  MenuTableHeader,
  MenuTableBody,
  CheckboxWrapper,
} from '@pages/DiscountEventPage/DiscountEventPage/DiscountEventPage.style'
import { useNavigate } from 'react-router-dom'

export default function DiscountEventPage() {
  const navigate = useNavigate()
  return (
    <>
      <PageContainer>
        <Header>
          <BackButton onClick={() => navigate('/manager')}>&lt;</BackButton>
          <Title>할인 행사 진행하기</Title>
        </Header>
        <EventForm>
          <DateDataWrapper>
            <Label>행사 기간 선택</Label>
            <DateInputWrapper>
              <DateInput type="date" />
              <SpanLabel>부터</SpanLabel>
              <DateInput type="date" />
              <SpanLabel>까지</SpanLabel>
            </DateInputWrapper>
          </DateDataWrapper>
          <Label>행사 적용 메뉴</Label>
          <MenuTable>
            <MenuTableHeader>
              <span>메뉴</span>
              <span>할인 가격</span>
              <span>적용</span>
            </MenuTableHeader>
            <MenuTableBody>
              <MenuRow>
                <MenuLabel>김치찌개</MenuLabel>
                <PriceInput type="text" defaultValue="1000" />
                <CheckboxWrapper>
                  <input type="checkbox" id="kimchi" />
                  <label htmlFor="kimchi"></label>
                </CheckboxWrapper>
              </MenuRow>
              <MenuRow>
                <MenuLabel>된장찌개</MenuLabel>
                <PriceInput type="text" defaultValue="1000" />
                <CheckboxWrapper>
                  <input type="checkbox" id="doenjang" />
                  <label htmlFor="doenjang"></label>
                </CheckboxWrapper>
              </MenuRow>
              <MenuRow>
                <MenuLabel>계란말이</MenuLabel>
                <PriceInput type="text" placeholder="가격 입력" />
                <CheckboxWrapper>
                  <input type="checkbox" id="egg" />
                  <label htmlFor="egg"></label>
                </CheckboxWrapper>
              </MenuRow>
            </MenuTableBody>
          </MenuTable>
        </EventForm>
      </PageContainer>
      <SubmitButton onClick={() => navigate('/discount-eventTwo')}>
        다음
      </SubmitButton>
    </>
  )
}
