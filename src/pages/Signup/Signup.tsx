import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LogoContainer, Logo, Title, SignupButton } from './Signup.style'
import { Kakao_Auth_Url } from '@components/OAuthUrl'
import bablogo from '@assets/OnboardingPage/bablogo.svg'
import kakaoBtn from '@assets/OnboardingPage/kakao_login_large_wide.png'

export default function Signup() {
  return (
    <LogoContainer>
      <Logo src={bablogo} alt="Logo" />
      <Title>밥이득</Title>
      <a href={Kakao_Auth_Url}>
        <SignupButton src={kakaoBtn} />
      </a>
    </LogoContainer>
  )
}
