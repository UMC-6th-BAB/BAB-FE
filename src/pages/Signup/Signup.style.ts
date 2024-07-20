import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const LogoContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 130px;
    margin-top: 120px;
`;

export const Title = styled.div`
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 68;
    margin-top: 30px;
`;

export const SignupButton = styled.button`
    border-radius: 20px;
    border: none;
    width: 311px;
    height: 53px;
    margin-top: 250px;
    font-size: 15px;
    font-weight: 500;
    color: #424242;
    background-color: #F7E600;
    cursor: pointer;
    transition: border-color 0.25s;
`;