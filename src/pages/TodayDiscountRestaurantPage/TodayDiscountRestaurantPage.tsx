import { TodayDiscountRestaurantPageContainer } from '@pages/TodayDiscountRestaurantPage/TodayDiscountRestaurantPage.style'
import HeaderTitle from '@components/HeaderTitle/HeaderTitle'
import TodayDiscountRestaurant from '@components/TodayDiscountRestaurant/TodayDiscountRestaurant'
import { useNavigate } from 'react-router-dom'

export default function TodayDiscountRestaurantPage() {
  const navigator = useNavigate()
  return (
    <TodayDiscountRestaurantPageContainer>
      <HeaderTitle
        title="오늘의 할인 식당"
        icon="back"
        onClick={() => navigator('/studentPage')}
      />
      <TodayDiscountRestaurant />
    </TodayDiscountRestaurantPageContainer>
  )
}
