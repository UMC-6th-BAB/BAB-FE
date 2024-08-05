import styled from 'styled-components'

export const CategoryHeader = styled.div`
    display: flex;
    background-color: #FFFFFF;
    width: 370px;
    height: 50px;
    font-size: 19px;
    font-weight: 600;
    align-items: center;
    padding: 30px 0px 0px 30px;
    position: fixed;
    top: 0px;
    z-index: 4; /* 다른 요소 위로 보이도록 설정 */
`;
export const BackBtn = styled.div`
    cursor: pointer;
    margin-right: 10px;
`;
export const CategoryInfo = styled.div`
    cursor: pointer;
`;