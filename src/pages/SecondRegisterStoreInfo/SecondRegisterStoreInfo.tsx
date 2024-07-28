import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/RegisterStoreInfo/back.svg'
import nav from '../../assets/RegisterStoreInfo/secondstep.svg'
import errorIcon from '../../assets/RegisterStoreInfo/warnning.svg'

import {
  StyledAddTimeButton,
  StyledBackIcon,
  StyledBreakTimeContainer,
  StyledButton,
  StyledCheckBox,
  StyledContainer,
  StyledDayLabel,
  StyledErrorMessage,
  StyledFormContainer,
  StyledInputContainer,
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
import { useErrorInput } from '../../hooks/useErrorInput'

export default function SecondRegisterStoreInfo() {
  const navigate = useNavigate()
  const [breakTimes, setBreakTimes] = useState([
    {
      start: '09:00',
      end: '22:00',
    },
  ])

  const operatingHours = useErrorInput('')
  const [checkedDays, setCheckedDays] = useState<boolean[]>(
    Array(7).fill(false),
  )

  const handleNext = () => {
    if (!checkedDays.includes(true)) {
      operatingHours.setError('운영 시간을 작성해 주세요.')
    } else {
      navigate('/thirdRegisterStoreInfo')
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleAddBreakTime = () => {
    setBreakTimes([...breakTimes, { start: '09:00', end: '22:00' }])
  }

  const handleCheckboxChange = (index: number) => {
    const newCheckedDays = [...checkedDays]
    newCheckedDays[index] = !newCheckedDays[index]
    setCheckedDays(newCheckedDays)
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
          <StyledInputContainer>
            <StyledLabel>가게 운영 시간</StyledLabel>
            {operatingHours.error && (
              <StyledErrorMessage>
                <img src={errorIcon} alt="Error icon" />
                {operatingHours.error}
              </StyledErrorMessage>
            )}
          </StyledInputContainer>
          <StyledTimeTable className={operatingHours.error ? 'invalid' : ''}>
            {['월', '화', '수', '목', '금', '토', '일'].map((day, index) => (
              <StyledTimeRow key={index}>
                <StyledDayLabel>{day}</StyledDayLabel>
                <StyledTimeInput type="text" defaultValue="09:00" />
                <StyledTimeText>부터</StyledTimeText>
                <StyledTimeInput type="text" defaultValue="22:00" />
                <StyledTimeText>까지</StyledTimeText>
                <StyledCheckBox
                  checked={checkedDays[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
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
