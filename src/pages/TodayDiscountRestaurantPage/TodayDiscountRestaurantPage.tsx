import {
  TodayDiscountRestaurantPageContainer,
  Title,
  BackArrow,
  TitleText,
} from '@pages/TodayDiscountRestaurantPage/TodayDiscountRestaurantPage.style'
import TodayDiscountRestaurant from '@components/TodayDiscountRestaurant/TodayDiscountRestaurant'

export default function TodayDiscountRestaurantPage() {
  return (
    <TodayDiscountRestaurantPageContainer>
      <Title>
        <BackArrow to="../studentPage">&lt;</BackArrow>
        <TitleText>오늘의 할인 식당</TitleText>
      </Title>
      <TodayDiscountRestaurant />
    </TodayDiscountRestaurantPageContainer>
  )
}
