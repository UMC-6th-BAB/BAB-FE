import React from 'react'
import { useNavigate } from 'react-router-dom';
import {DetailContainer, CategoryHeader, MenuHeader, BkImg, ShopTitle, EventContainer, Event, LinkBtn, MenuBody,
    TodayEvent, Coupon, CouponImg, CouponInfoContainer, CouponInfoTitle, CouponInfoBody, MenuContainer, Line
} from './ShopDetail.style'
import {ShopMenu} from '@components/ShopMenu/ShopMenu'
import slowcalyImg from '@assets/ShopDetailPage/slowcalyImg.svg';
import couponImg from '@assets/icons/coupon.svg';
import shopmenu1 from '@assets/ShopDetailPage/shopmenu1.svg'

export const ShopDetail: React.FC = () => {
    const navigate = useNavigate();
    const dummy = [
        {
          id: 1,
          discountType: '가게 특별 할인',
          restaurantName: '샐러디',
          menus: [
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
      const resInfo = dummy.find(dummy=>dummy.id === 1);

    return (
        <DetailContainer>
            <CategoryHeader onClick={()=>navigate(-1)}>{`<`} 포케</CategoryHeader>
            <MenuHeader>
                {resInfo? (
                <BkImg $imgsrc={slowcalyImg}>
                    <ShopTitle>{resInfo.restaurantName}</ShopTitle>
                    <EventContainer>
                        <Event>{resInfo.discountType}</Event>
                        <LinkBtn onClick={()=>navigate("행사페이지")}>링크 바로가기{` >`}</LinkBtn>
                    </EventContainer>
                </BkImg>): '해당 식당 없음'
            }
            </MenuHeader>
            <MenuBody>
                <TodayEvent>오늘 할인 행사 하는 음식점이에요!</TodayEvent>
                <Coupon>
                    <CouponImg src={couponImg}></CouponImg>
                    <CouponInfoContainer>
                        <CouponInfoTitle>전 메뉴 5000원 할인</CouponInfoTitle>
                        <CouponInfoBody>SKT에서 할인 쿠폰을 다운받으세요!</CouponInfoBody>
                    </CouponInfoContainer>
                </Coupon>
                <Line/>
                <MenuContainer>
                    {resInfo && resInfo.menus.map((menu)=>
                        <ShopMenu
                        key={menu.id}
                        img={shopmenu1}
                        title={menu.dishName}
                        fixprice={menu.price}
                        discountrate={((menu.price - menu.discountedPrice) / menu.price * 100).toFixed(0) + '%'}
                        saleprice={menu.discountedPrice}
                    />)}
                </MenuContainer>
            </MenuBody>
        </DetailContainer>
    )
};