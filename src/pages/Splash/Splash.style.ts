import styled from 'styled-components'
import { theme } from '../../styles/theme'

export const SplashContainer = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.img`
    width: 130px;
`;

export const Title = styled.p`
    font-size: 50px;
    font-weight: 900;
    letter-spacing: 68;
    margin-top: 30px;
`;