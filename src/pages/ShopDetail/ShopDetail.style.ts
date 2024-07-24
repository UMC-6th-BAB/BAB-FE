import styled from 'styled-components'

export const DetailContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryHeader = styled.div`
    display: flex;
    background-color: #FFFFFF;
    width: 390px;
    height: 58px;
    font-size: 19px;
    font-weight: 600;
    align-items: center;
    padding-left: 30px;
    cursor: pointer;
`;

export const MenuHeader = styled.div`

`;
export const BkImg = styled.div<{$imgsrc:string}>`
    height: 244px;
    background-image: 
        linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)),
        url('${(props)=>props.$imgsrc}');
    background-size: cover;
`;
export const ShopTitle = styled.div`
    font-size: 23px;
    font-weight: 700;
    color: #FFFFFF;
    text-align: left;
    padding: 0px 20px;
    position: relative;
    top: 160px;
`;
export const EventContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0px 23px;
    position: relative;
    top: 160px;
`;
export const Event = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: #FDD100;
`;
export const LinkBtn = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: #FFFFFF;
    cursor: pointer;
`;
export const MenuBody = styled.div`
    height: 440px;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    background-color: #FFFFFF;
    position: relative;
    top: -10px;
    text-align: left;
`;
export const TodayEvent = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin: 15px 20px;
`;
export const Coupon = styled.div`
    display: flex;
    text-align: left;
    margin-left: 30px;
`;
export const CouponImg = styled.img`
    cursor: pointer;
`;
export const CouponInfoContainer = styled.div`
    margin-left: 20px;
`;
export const CouponInfoTitle = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: #767676;
`;
export const CouponInfoBody = styled.div`
    font-size: 14px;
    font-weight: 600;
`;
export const MenuContainer = styled.div`
`;
export const Line = styled.div`
    background-color: #F8F8F8;
    width: 400px;
    height: 2px;
    margin: 20px 0px;
`;