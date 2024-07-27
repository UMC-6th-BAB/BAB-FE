import { useNavigate } from 'react-router-dom'
import Back from '../../assets/RegisterStoreInfo/back.svg'
import nav from '../../assets/RegisterStoreInfo/secondstep.svg'

import {
  StyledAddTimeButton,
  StyledBackIcon,
  StyledBreakTimeContainer,
  StyledBreakTimeRow,
  StyledButton,
  StyledCheckBox,
  StyledContainer,
  StyledDayButton,
  StyledDayLabel,
  StyledFormContainer,
  StyledLabel,
  StyledNavImg,
  StyledNavImgWrapper,
  StyledNavText,
  StyledRow,
  StyledScrollableContent,
  StyledTimeInput,
  StyledTimeRow,
  StyledTimeTable,
  StyledTimeText,
  StyledTitle,
  StyledToggle,
} from './SecondRegisterStoreInfo.style'

export default function SecondRegisterStoreInfo() {
  const navigate = useNavigate()
  const handleNext = () => {
    navigate('/thirdRegisterStoreInfo')
  }
  const handleBack = () => {
    navigate(-1)
    console.log('f')
  }
  //   const handleUpload = () => {
  //     // TODO: 갤러리에서 이미지 등록하기
  //     console.log('갤러리에서 이미지 등록하기 버튼')
  //   }
  return (
    <StyledContainer>
      <StyledRow>
        <StyledBackIcon onClick={handleBack} src={Back} />
        <StyledTitle>가게 정보 등록</StyledTitle>
      </StyledRow>
      <StyledNavImgWrapper>
        <StyledNavImg src={nav} />
        <StyledNavText>
          <div>기본 정보</div>
          <div>영업 시간</div>
          <div>메뉴 등록</div>
        </StyledNavText>
      </StyledNavImgWrapper>
      <StyledScrollableContent>
        <StyledFormContainer>
          <StyledLabel>가게 운영 시간</StyledLabel>
          <StyledTimeTable>
            {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
              <StyledTimeRow key={index}>
                <StyledDayLabel>{day}</StyledDayLabel>
                <StyledTimeInput type="text" defaultValue="09:00" />
                <StyledTimeText>부터</StyledTimeText>
                <StyledTimeInput type="text" defaultValue="22:00" />
                <StyledTimeText>까지</StyledTimeText>
                <StyledCheckBox defaultChecked={index < 6} />
              </StyledTimeRow>
            ))}
          </StyledTimeTable>
          <StyledLabel>브레이크 타임</StyledLabel>
          <StyledBreakTimeContainer>
            <StyledBreakTimeRow>
              {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
                <StyledDayButton key={index}>{day}</StyledDayButton>
              ))}
            </StyledBreakTimeRow>
            <StyledTimeRow>
              <StyledTimeInput type="text" defaultValue="09:00" />
              <StyledTimeText>부터</StyledTimeText>
              <StyledTimeInput type="text" defaultValue="22:00" />
              <StyledTimeText>까지</StyledTimeText>
              <StyledToggle />
            </StyledTimeRow>
            <StyledAddTimeButton>다른 시간 추가 설정하기</StyledAddTimeButton>
          </StyledBreakTimeContainer>
          <StyledButton onClick={handleNext}>다음</StyledButton>
        </StyledFormContainer>
      </StyledScrollableContent>
    </StyledContainer>
  )
}
