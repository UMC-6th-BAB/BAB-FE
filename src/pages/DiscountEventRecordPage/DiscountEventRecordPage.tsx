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
  DeleteButton,
} from '@pages/DiscountEventRecordPage/DiscountEventRecordPage.style'
import { useNavigate } from 'react-router-dom'
import storeInfoStore from '@stores/storeInfoStore'
import discountEventStore from '@stores/discountEventStore'

export default function DiscountEventRecordPage() {
  const navigate = useNavigate()
  const { storeInfos } = storeInfoStore()
  const { discountEvents, removeDiscountEventsByStoreId } = discountEventStore()

  const handleDeleteClick = (storeId: number) => {
    removeDiscountEventsByStoreId(storeId)
  } //여기 API 코드는 브렌치 새로 파서 진행하겠습니다(본격적인 할인 로직 다룰때)
  //현재는 클라이언트 단에서(스토어) 삭제되는거까지만 해놨습니다.
  console.log(discountEvents)
  return (
    <PageContainer>
      <Header>
        <BackButton onClick={() => navigate('/manager')}>&lt;</BackButton>
        <Title>진행했던 할인행사 보기</Title>
      </Header>
      <EventList>
        {discountEvents.map((event) => (
          <EventItem key={event.id}>
            <EventTitle>{storeInfos[0].name}</EventTitle>
            <EventDescription>{event.eventMessage}</EventDescription>
            {event.discounts
              .filter(
                (discount) => discount.isChecked && discount.discountPrice > 0,
              )
              .map((discount) => (
                <EventDescription key={discount.id}>
                  {discount.name} {discount.discountPrice}원 할인
                </EventDescription>
              ))}
            <EventPeriod>
              {event.startDate} ~ {event.endDate}
            </EventPeriod>
            <DeleteButton onClick={() => handleDeleteClick(event.storeId)}>
              삭제
            </DeleteButton>
          </EventItem>
        ))}
      </EventList>
    </PageContainer>
  )
}
