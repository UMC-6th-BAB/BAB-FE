import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Confetti from '@assets/RegisterSuccess/Confetti.svg'
import { StyledContainer, StyledImg, StyledText } from './RegisterSuccess.style'

export default function RegisterStoreSuccess() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/manager')
    }, 3000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <StyledContainer>
      <StyledImg src={Confetti} />
      <StyledText>가게 등록이 완료되었습니다!</StyledText>
    </StyledContainer>
  )
}
