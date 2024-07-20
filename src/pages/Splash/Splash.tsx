import React from 'react';
import { SplashContainer, Logo, Title } from './Splash.style';

export const Splash: React.FC = () => {
    return (
        <SplashContainer>
            <Logo src="src/assets/bablogo.png" alt="Logo" />
            <Title>밥이득</Title>
        </SplashContainer>
    );
};
