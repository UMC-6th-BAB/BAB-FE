import styled from 'styled-components'

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 20px;
    text-align: left;
`;
export const MenuImg = styled.img`
    width: 80px;
`;
export const MenuTitle = styled.div`
    font-size: 13px;
    font-weight: 700;
`;
export const MenuFixPrice = styled.div`
    font-size: 13px;
    color: #767676;
    text-decoration: line-through;
`;
export const MenuDiscountRate = styled.div`
    font-size: 17px;
    font-weight: 900;
    color: #FDD100;
`;
export const MenuSalePrice = styled.div`
    font-size: 17px;
    font-weight: 700;
`;
export const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    justify-content: center;
    gap: 3px;
`;
export const DiscountContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;