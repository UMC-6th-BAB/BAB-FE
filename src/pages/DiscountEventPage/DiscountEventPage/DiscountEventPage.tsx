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
    currentEvent,
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
    let hasError = false

    if (!currentEvent.startDate || !currentEvent.endDate) {
      periodError = '행사 기간을 입력하세요.'
      hasError = true
    }

    let hasValidDiscount = false
    for (const discount of currentEvent.discounts) {
      if (discount.isChecked && discount.discountPrice) {
        hasValidDiscount = true
      }
    }

    if (!hasValidDiscount) {
      discountError = '적용할 메뉴를 선택하고 가격을 입력해주세요.'
      hasError = true
    }

    setErrorMessages({
      periodError,
      discountError,
    })

    if (!hasError) {
      currentEvent.discounts.forEach((discount) => {
        if (discount.isChecked && discount.discountPrice > 0) {
          updateMenuDiscount(
            discount.id,
            discount.discountPrice,
            discount.isChecked,
          )
        }
      })
      navigate('/discount-eventTwo')
    }
  }

  console.log(currentEvent.startDate)
  console.log(currentEvent.endDate)

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
                  setEventPeriod(e.target.value, currentEvent.endDate)
                }
              />
              <SpanLabel>부터</SpanLabel>
              <DateInput
                type="date"
                onChange={(e) =>
                  setEventPeriod(currentEvent.startDate, e.target.value)
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
