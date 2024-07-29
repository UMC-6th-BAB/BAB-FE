import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {LoginStore} from '@stores/loginStore'
import { SplashContainer, Logo, Title } from './Splash.style';
import bablogo from '@assets/OnboardingPage/bablogo.svg'

export const Splash: React.FC = () => {
    const navigate = useNavigate();
    const {isLogined, setIsLogined} = LoginStore(state=>state);

    useEffect(()=>{
        setIsLogined(true);
        if(isLogined==false){
            const timer = setTimeout(()=>navigate("/membertype"), 1000);
            return ()=> clearTimeout(timer);
        }
        else if(isLogined==true){
            navigate("/mapPage");
        }
    }, []);

    return (
        <SplashContainer>
            <Logo src={bablogo} alt="Logo" />
            <Title>밥이득</Title>
        </SplashContainer>
    );
};
