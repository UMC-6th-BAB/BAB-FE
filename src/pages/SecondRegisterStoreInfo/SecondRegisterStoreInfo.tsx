import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/RegisterStoreInfo/back.svg'
import nav from '../../assets/RegisterStoreInfo/secondstep.svg'

import {
  StyledAddTimeButton,
  StyledBackIcon,
  StyledBreakTimeContainer,
  StyledButton,
  StyledCheckBox,
  StyledContainer,
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
} from './SecondRegisterStoreInfo.style'
import { BreakTime } from '../../components/BreakTime/BreakTime'

export default function SecondRegisterStoreInfo() {
  const navigate = useNavigate()
  const [breakTimes, setBreakTimes] = useState([
    {
      start: '09:00',
      end: '22:00',
    },
  ])

  const handleNext = () => {
    navigate('/thirdRegisterStoreInfo')
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleAddBreakTime = () => {
    setBreakTimes([...breakTimes, { start: '09:00', end: '22:00' }])
  }

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
            {breakTimes.map((time, index) => (
              <BreakTime key={index} time={time} index={index} />
            ))}
            <StyledAddTimeButton onClick={handleAddBreakTime}>
              다른 시간 추가 설정하기
            </StyledAddTimeButton>
          </StyledBreakTimeContainer>
          <StyledButton onClick={handleNext}>다음</StyledButton>
        </StyledFormContainer>
      </StyledScrollableContent>
    </StyledContainer>
  )
}
