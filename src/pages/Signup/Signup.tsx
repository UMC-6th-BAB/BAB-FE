import React from 'react';
import {useNavigate} from 'react-router-dom'
import { LogoContainer, Logo, Title, SignupButton } from './Signup.style';
import {Kakao_Auth_Url} from '../../components/OAuthUrl'

export const Signup: React.FC = () => {

    return (
        <LogoContainer>
            <Logo src="src/assets/bablogo.png" alt="Logo" />
            <Title>밥이득</Title>
            <a href = {Kakao_Auth_Url}>
            <SignupButton 
                src="src/assets/kakao_login_large_wide.png"/>
            </a>
        </LogoContainer>
    );
};