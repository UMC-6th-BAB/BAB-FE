import { TodayDiscountRestaurantPageContainer } from '@pages/TodayDiscountRestaurantPage/TodayDiscountRestaurantPage.style'
import HeaderTitle from '@components/HeaderTitle/HeaderTitle'
import TodayDiscountRestaurant from '@components/TodayDiscountRestaurant/TodayDiscountRestaurant'

export default function DiscountRestaurantListPage() {
  return (
    <TodayDiscountRestaurantPageContainer>
      <HeaderTitle title="오늘의 할인 식당" />
      <TodayDiscountRestaurant />
    </TodayDiscountRestaurantPageContainer>
  )
}
