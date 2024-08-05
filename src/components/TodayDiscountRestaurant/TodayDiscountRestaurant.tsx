import {
  RestaurantList,
  Restaurant,
  DiscountType,
  RestaurantName,
  GoToRestaurantBtn,
  MenuList,
  Menu,
  Dish,
  Dash,
  DiscountedPrice,
  Price,
} from './TodayDiscountRestaurant.style'

export default function TodayDiscountRestaurant() {
  const dummy = [
    {
      id: 1,
      discountType: 'SKT 할인',
      restaurantName: '스타벅스',
      menu: [
        {
          id: 1,
          dishName: '바닐라 빈 푸딩 블렌디드 위드 에스프레소',
          discountedPrice: 8300,
          price: 9000,
        },
        {
          id: 2,
          dishName: '퍼플 드링크 위드 망고 용과 소다',
          discountedPrice: 7300,
          price: 8000,
        },
      ],
    },

    {
      id: 3,
      discountType: '가게 특별 할인',
      restaurantName: '샐러디',
      menu: [
        {
          id: 1,
          dishName: '콥 샐러드',
          discountedPrice: 7200,
          price: 8900,
        },
        {
          id: 2,
          dishName: '탄단지 샐러드',
          discountedPrice: 7200,
          price: 8900,
        },
      ],
    },
  ]
  return (
    <RestaurantList>
      {dummy.map((restaurant) => (
        <Restaurant key={restaurant.id}>
          <DiscountType>{restaurant.discountType}</DiscountType>
          <RestaurantName>{restaurant.restaurantName}</RestaurantName>
          <GoToRestaurantBtn>
            바로 가기
            <span>&gt;</span>
          </GoToRestaurantBtn>
          <MenuList>
            <Menu>
              <Dish>{restaurant.menu[0].dishName}</Dish>
              <Dash />
              <DiscountedPrice>
                {restaurant.menu[0].discountedPrice}
              </DiscountedPrice>
              <Price>{restaurant.menu[0].price}</Price>
            </Menu>
            <Menu>
              <Dish>{restaurant.menu[1].dishName}</Dish>
              <Dash />
              <DiscountedPrice>
                {restaurant.menu[1].discountedPrice}
              </DiscountedPrice>
              <Price>{restaurant.menu[1].price}</Price>
            </Menu>
          </MenuList>
        </Restaurant>
      ))}
    </RestaurantList>
  )
}
