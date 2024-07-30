import React, { useEffect, useState } from 'react'
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
  ErrorMessage,
} from '@pages/DiscountEventPage/DiscountEventPage/DiscountEventPage.style'
import { useNavigate } from 'react-router-dom'
import storeInfoStore from '@stores/storeInfoStore'
import discountEventStore from '@stores/discountEventStore'

export default function DiscountEventPage() {
  const navigate = useNavigate()
  const {
    setEventPeriod,
    setDiscountChecked,
    setDiscountPrice,
    initializeDiscounts,
    discounts,
    eventPeriod,
  } = discountEventStore()
  const { storeInfo, updateMenuDiscount } = storeInfoStore()

  const [errorMessages, setErrorMessages] = useState<{
    periodError: string
    discountError: string
  }>({
    periodError: '',
    discountError: '',
  })

  useEffect(() => {
    initializeDiscounts(storeInfo.menu)
  }, [storeInfo.menu, initializeDiscounts])

  const handleNextClick = () => {
    let periodError = ''
    let discountError = ''
    let hasError = false // 위에 에러에 따라서 전역으로 따져주는 에러 상태!

    if (!eventPeriod.startDate || !eventPeriod.endDate) {
      periodError = '행사 기간을 입력하세요.'
      hasError = true
    }

    for (const discount of discounts) {
      //순회하면서 유효성 검사
      if (
        (!discount.isChecked && !discount.discountPrice) ||
        (discount.isChecked && !discount.discountPrice)
      ) {
        discountError = '할인할 메뉴에 대해 가격을 입력해주세요.'
        hasError = true
        break
      }
      if (!discount.isChecked && discount.discountPrice) {
        discountError = '할인할 메뉴를 체크해주세요.'
        hasError = true
        break
      }
      if (discount.isChecked && discount.discountPrice >= 0) {
        //모든 데이터가 정상적
        hasError = false
        break
      }
    }

    setErrorMessages({
      periodError,
      discountError,
    })

    if (!hasError) {
      discounts.forEach((discount) => {
        if (discount.isChecked && discount.discountPrice > 0) {
          updateMenuDiscount(
            discount.id,
            discount.discountPrice,
            discount.isChecked, // 체크를 해야 할인이 적용되도록 함
          )
        }
      })
      navigate('/discount-eventTwo')
    }
  }

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
              <DateInput
                type="date"
                onChange={(e) =>
                  setEventPeriod(e.target.value, eventPeriod.endDate)
                }
              />
              <SpanLabel>부터</SpanLabel>
              <DateInput
                type="date"
                onChange={(e) =>
                  setEventPeriod(eventPeriod.startDate, e.target.value)
                }
              />
              <SpanLabel>까지</SpanLabel>
            </DateInputWrapper>
            {errorMessages.periodError && (
              <ErrorMessage>{errorMessages.periodError}</ErrorMessage>
            )}
          </DateDataWrapper>
          <Label>행사 적용 메뉴</Label>
          <MenuTable>
            <MenuTableHeader>
              <span>메뉴</span>
              <span>할인 가격</span>
              <span>적용</span>
            </MenuTableHeader>
            <MenuTableBody>
              {storeInfo.menu.map((item) => (
                <MenuRow key={item.id}>
                  <MenuLabel>{item.name}</MenuLabel>
                  <PriceInput
                    type="text"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setDiscountPrice(item.id, Number(e.target.value) || 0)
                      setErrorMessages((prev) => ({
                        ...prev,
                        discountError: '',
                      }))
                    }}
                  />
                  <CheckboxWrapper>
                    <input
                      type="checkbox"
                      id={`menu${item.id}`}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setDiscountChecked(item.id, e.target.checked)
                        setErrorMessages((prev) => ({
                          ...prev,
                          discountError: '',
                        }))
                      }}
                    />
                    <label htmlFor={`menu${item.id}`}></label>
                  </CheckboxWrapper>
                </MenuRow>
              ))}
            </MenuTableBody>
          </MenuTable>
          {errorMessages.discountError && (
            <ErrorMessage>{errorMessages.discountError}</ErrorMessage>
          )}
        </EventForm>
      </PageContainer>
      <SubmitButton onClick={handleNextClick}>다음</SubmitButton>
    </>
  )
}
