import {
  TodayDiscountRestaurantPageContainer,
  Title,
  TitleText,
} from '@pages/TodayDiscountRestaurantPage/TodayDiscountRestaurantPage.style'
import TodayDiscountRestaurant from '@components/TodayDiscountRestaurant/TodayDiscountRestaurant'

export default function DiscountRestaurantListPage() {
  return (
    <TodayDiscountRestaurantPageContainer>
      <Title>
        <TitleText>오늘의 할인 식당</TitleText>
      </Title>
      <TodayDiscountRestaurant />
    </TodayDiscountRestaurantPageContainer>
  )
}
