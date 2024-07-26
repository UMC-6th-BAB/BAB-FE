import React, { useEffect } from 'react'
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
import RestaurantInfoStore from '@stores/restaurantInfoStore'
import DiscountEventStore from '@stores/discountEventStore'

export default function DiscountEventPage() {
  const navigate = useNavigate()
  const {
    setEventPeriod,
    setDiscountChecked,
    setDiscountPrice,
    initializeDiscounts,
    discounts,
    eventPeriod,
  } = DiscountEventStore()
  const { restaurantInfo, updateMenuDiscount } = RestaurantInfoStore()

  useEffect(() => {
    initializeDiscounts(restaurantInfo.menu)
  }, [restaurantInfo.menu, initializeDiscounts])

  const handleNextClick = () => {
    discounts.forEach((discount) => {
      if (discount.isChecked) {
        const discountPrice = discount.originalPrice - discount.discountPrice
        updateMenuDiscount(discount.id, discountPrice, discount.isChecked)
      }
    })
    navigate('/discount-eventTwo')
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
          </DateDataWrapper>
          <Label>행사 적용 메뉴</Label>
          <MenuTable>
            <MenuTableHeader>
              <span>메뉴</span>
              <span>할인 가격</span>
              <span>적용</span>
            </MenuTableHeader>
            <MenuTableBody>
              {restaurantInfo.menu.map((item) => (
                <MenuRow key={item.id}>
                  <MenuLabel>{item.name}</MenuLabel>
                  <PriceInput
                    type="text"
                    onChange={(e) =>
                      setDiscountPrice(item.id, Number(e.target.value))
                    }
                  />
                  <CheckboxWrapper>
                    <input
                      type="checkbox"
                      id={`menu${item.id}`}
                      onChange={(e) =>
                        setDiscountChecked(item.id, e.target.checked)
                      }
                    />
                    <label htmlFor={`menu${item.id}`}></label>
                  </CheckboxWrapper>
                </MenuRow>
              ))}
            </MenuTableBody>
          </MenuTable>
        </EventForm>
      </PageContainer>
      <SubmitButton onClick={handleNextClick}>다음</SubmitButton>
    </>
  )
}
