import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format, parseISO } from 'date-fns'
import {
  PageContainer,
  Header,
  Title,
  BackButton,
  EventForm,
  Label,
  SpanLabel,
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
  CustomDatePickerWrapper,
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

    if (
      currentEvent.startDate &&
      currentEvent.endDate &&
      currentEvent.startDate > currentEvent.endDate
    ) {
      periodError = '시작 날짜는 종료 날짜보다 이전이어야 합니다.'
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

  const handleStartDateChange = (date: Date | null) => {
    const formattedDate = date ? format(date, 'yyyy-MM-dd') : ''
    setEventPeriod(formattedDate, currentEvent.endDate)
    setErrorMessages((prev) => ({
      ...prev,
      periodError:
        currentEvent.endDate && formattedDate > currentEvent.endDate
          ? '시작 날짜는 종료 날짜보다 이전이어야 합니다.'
          : '',
    }))
  }

  const handleEndDateChange = (date: Date | null) => {
    const formattedDate = date ? format(date, 'yyyy-MM-dd') : ''
    setEventPeriod(currentEvent.startDate, formattedDate)
    setErrorMessages((prev) => ({
      ...prev,
      periodError:
        currentEvent.startDate && formattedDate < currentEvent.startDate
          ? '종료 날짜는 시작 날짜보다 이후이어야 합니다.'
          : '',
    }))
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
              <CustomDatePickerWrapper>
                <DatePicker
                  selected={
                    currentEvent.startDate
                      ? parseISO(currentEvent.startDate)
                      : null
                  }
                  onChange={handleStartDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="연도.월.일"
                />
              </CustomDatePickerWrapper>
              <SpanLabel>부터</SpanLabel>
              <CustomDatePickerWrapper>
                <DatePicker
                  selected={
                    currentEvent.endDate ? parseISO(currentEvent.endDate) : null
                  }
                  onChange={handleEndDateChange}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="연도.월.일"
                />
              </CustomDatePickerWrapper>
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
