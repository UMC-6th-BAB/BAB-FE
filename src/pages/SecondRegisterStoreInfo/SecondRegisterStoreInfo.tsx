import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Back from '../../assets/RegisterStoreInfo/back.svg'
import nav from '../../assets/RegisterStoreInfo/secondstep.svg'
import errorIcon from '../../assets/RegisterStoreInfo/warnning.svg'
import { OperatingHour, BreakTimeType } from '../../types/types'

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

const days = ['월', '화', '수', '목', '금', '토', '일']

export default function SecondRegisterStoreInfo() {
  const navigate = useNavigate()
  const [breakTimes, setBreakTimes] = useState<BreakTimeType[]>([
    {
      start: '09:00',
      end: '22:00',
      selectedDays: Array(days.length).fill(false),
    },
  ])

  const [operatingHours, setOperatingHours] = useState<OperatingHour[]>(
    days.map(() => ({
      openTime: '09:00',
      closeTime: '22:00',
    })),
  )

  const error = useErrorInput('')
  const [checkedDays, setCheckedDays] = useState<boolean[]>(
    Array(days.length).fill(false),
  )

  const handleNext = () => {
    if (!checkedDays.includes(true)) {
      error.setError('운영 시간을 작성해 주세요.')
    } else {
      const payload = checkedDays
        .map((checked, index) => {
          if (checked) {
            const breakTime = breakTimes.find((bt) => bt.selectedDays[index])
            return {
              day: days[index],
              openTime: operatingHours[index].openTime + ':00',
              closeTime: operatingHours[index].closeTime + ':00',
              breakTime: breakTime
                ? {
                    startTime: breakTime.start + ':00',
                    endTime: breakTime.end + ':00',
                  }
                : {},
            }
          }
          return null
        })
        .filter(Boolean)

      console.log(payload)
      navigate('/thirdRegisterStoreInfo')
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  const handleAddBreakTime = () => {
    setBreakTimes([
      ...breakTimes,
      {
        start: '09:00',
        end: '22:00',
        selectedDays: Array(days.length).fill(false),
      },
    ])
  }

  const handleCheckboxChange = (index: number) => {
    const newCheckedDays = [...checkedDays]
    newCheckedDays[index] = !newCheckedDays[index]
    setCheckedDays(newCheckedDays)
  }

  const handleTimeChange = (
    index: number,
    field: 'openTime' | 'closeTime',
    value: string,
  ) => {
    const newOperatingHours = [...operatingHours]
    newOperatingHours[index][field] = value
    setOperatingHours(newOperatingHours)
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
            {error.error && (
              <StyledErrorMessage>
                <img src={errorIcon} alt="Error icon" />
                {error.error}
              </StyledErrorMessage>
            )}
          </StyledInputContainer>
          <StyledTimeTable className={error.error ? 'invalid' : ''}>
            {days.map((day, index) => (
              <StyledTimeRow key={index}>
                <StyledDayLabel>{day}</StyledDayLabel>
                <StyledTimeInput
                  type="time"
                  value={operatingHours[index].openTime}
                  onChange={(e) =>
                    handleTimeChange(index, 'openTime', e.target.value)
                  }
                />
                <StyledTimeText>부터</StyledTimeText>
                <StyledTimeInput
                  type="time"
                  value={operatingHours[index].closeTime}
                  onChange={(e) =>
                    handleTimeChange(index, 'closeTime', e.target.value)
                  }
                />
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
              <BreakTime
                key={index}
                time={time}
                index={index}
                setBreakTimes={setBreakTimes}
                breakTimes={breakTimes}
              />
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
