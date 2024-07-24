import React from 'react'
import {DetailContainer, CategoryHeader, MenuHeader, BkImg, ShopTitle, EventContainer, Event, LinkBtn, MenuBody,
    TodayEvent, Coupon, CouponImg, CouponInfoContainer, CouponInfoTitle, CouponInfoBody, MenuContainer, Line
} from './ShopDetail.style'
import {ShopMenu} from '../../components/ShopMenu/ShopMenu'
import slowcalyImg from '../../assets/slowcalyImg.svg';
import couponImg from '../../assets/coupon.svg';

export const ShopDetail: React.FC = () => {

    return (
        <DetailContainer>
            <CategoryHeader>{`<`} 포케</CategoryHeader>
            <MenuHeader>
                <BkImg $imgsrc={slowcalyImg}>
                    <ShopTitle>슬로우 캘리 숭실대점</ShopTitle>
                    <EventContainer>
                        <Event>통신사 행사</Event>
                        <LinkBtn>링크 바로가기{` >`}</LinkBtn>
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
                    <ShopMenu/>
                </MenuContainer>
            </MenuBody>
        </DetailContainer>
    )
};