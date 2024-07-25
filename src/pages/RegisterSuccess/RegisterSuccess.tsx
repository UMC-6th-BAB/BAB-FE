//import { useNavigate } from 'react-router-dom'
import Confetti from '../../assets/RegisterSuccess/Confetti.svg'
import {
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledImg,
  StyledText,
} from './RegisterSuccess.style'

export default function RegisterSuccess() {
  //const navigate = useNavigate()
  const handleMypage = () => {
    // TODO: 마이페이지로 이동
    console.log('마이페이지로 이동 버튼')
  }
  const handleRegisterStore = () => {
    // navigate('/registerStoreInfo')
    console.log('가게 등록 페이지로 이동 버튼')
  }
  return (
    <StyledContainer>
      <StyledImg src={Confetti} />
      <StyledText>
        사업자 등록증이 승인 되었습니다.
        <br />
        가게 등록을 시작하세요!
      </StyledText>
      <StyledButtonContainer>
        <StyledButton
          onClick={handleMypage}
          $Color="#111111"
          $bgColor="#d7d7d7"
        >
          나중에 하기
        </StyledButton>
        <StyledButton
          onClick={handleRegisterStore}
          $Color="#FFFFFF"
          $bgColor="#fdd100"
        >
          가게 등록하기
        </StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  )
}
