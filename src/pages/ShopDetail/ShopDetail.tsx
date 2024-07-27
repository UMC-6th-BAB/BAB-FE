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

    return (
        <DetailContainer>
            <CategoryHeader onClick={()=>navigate(-1)}>{`<`} 포케</CategoryHeader>
            <MenuHeader>
                <BkImg $imgsrc={slowcalyImg}>
                    <ShopTitle>슬로우 캘리 숭실대점</ShopTitle>
                    <EventContainer>
                        <Event>통신사 행사</Event>
                        <LinkBtn onClick={()=>navigate("행사페이지")}>링크 바로가기{` >`}</LinkBtn>
                    </EventContainer>
                </BkImg>
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
                    <ShopMenu
                    img={shopmenu1}
                    title="스파이시 참치포케"
                    fixprice={11500}
                    discountrate="43%"
                    saleprice={6500}
                    />
                </MenuContainer>
            </MenuBody>
        </DetailContainer>
    )
};