import React from 'react';
import { LogoContainer, Logo, Title, SignupButton } from './Signup.style';

export const Signup: React.FC = () => {
    return (
        <LogoContainer>
            <Logo src="src/assets/bablogo.png" alt="Logo" />
            <Title>밥이득</Title>
            <SignupButton>카카오톡으로 간편 가입</SignupButton>
        </LogoContainer>
    );
};