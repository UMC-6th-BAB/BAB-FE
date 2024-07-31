import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import {LoginStore} from '@stores/loginStore'
import { SplashContainer, Logo, Title } from './Splash.style';
import bablogo from '@assets/OnboardingPage/bablogo.svg'

export const Splash: React.FC = () => {
    const navigate = useNavigate();
    const {isLogined, setIsLogined} = LoginStore(state=>state);

    useEffect(()=>{
        setIsLogined(false);
        if(isLogined==false){
            //1초 뒤에 회원유형선택 페이지로 이동
            const timer = setTimeout(()=>navigate("/membertype"), 1000);
            return ()=> clearTimeout(timer);
        }
        else if(isLogined==true){
            //로그인되어 있으면 홈으로 이동
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
