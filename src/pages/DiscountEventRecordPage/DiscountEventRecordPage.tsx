import React from 'react'
import {
  PageContainer,
  Header,
  Title,
  BackButton,
  EventList,
  EventItem,
  EventTitle,
  EventDescription,
  EventPeriod,
} from '@pages/DiscountEventRecordPage/DiscountEventRecordPage.style'
import { useNavigate } from 'react-router-dom'
import RestaurantInfoStore from '@stores/restaurantInfoStore'
import DiscountEventStore from '@stores/discountEventStore'

export default function DiscountEventRecordPage() {
  const navigate = useNavigate()
  const { restaurantInfo } = RestaurantInfoStore()
  const { discountEvents } = DiscountEventStore()

  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate('/manager')}>&lt;</BackButton>
        <Title>진행했던 할인행사 보기</Title>
      </Header>
      <EventList>
        {discountEvents.map((event) => (
          <EventItem key={event.id}>
            <EventTitle>{restaurantInfo.name}</EventTitle>
            <EventDescription>{event.eventMessage}</EventDescription>
            {event.discounts
              .filter((discount) => discount.isChecked)
              .map((discount) => (
                <EventDescription key={discount.id}>
                  {discount.name} {discount.discountPrice}원 할인
                </EventDescription>
              ))}
            <EventPeriod>
              {event.startDate} - {event.endDate}
            </EventPeriod>
          </EventItem>
        ))}
      </EventList>
    </PageContainer>
  )
}