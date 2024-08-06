import { StyledCard, CardTitle } from '../MyPageCard.style'
import { DiscountList, DiscountItem, Text, More } from './DiscountInfo.style'

export default function DiscountInfo() {
  const dummy = [
    { id: 1, name: '샐러디 숭실대점', content: '전메뉴 5000원 할인' },
    { id: 2, name: '크라이치즈버거', content: '무료 업그레이드' },
    { id: 3, name: '애슐리 퀸즈 서울대입구점', content: '10% 할인' },
  ]
  return (
    <StyledCard paddingTop="24px" paddingBottom="27px">
      <div style={{ display: 'flex', gap: '109px', alignItems: 'start' }}>
        <CardTitle paddingBottom="35px">오늘의 할인 식당</CardTitle>
        <More to="/todayDiscountRestaurant">
          <div>더보기</div>
          <div>&gt;</div>
        </More>
      </div>
      <DiscountList>
        {dummy.map((shop) => (
          <DiscountItem key={shop.id}>
            <Text color="#000000">{shop.name}</Text>
            <Text color="#767676">{shop.content}</Text>
          </DiscountItem>
        ))}
      </DiscountList>
    </StyledCard>
  )
}
