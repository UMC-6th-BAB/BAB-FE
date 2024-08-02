import {
  StyledBreakTimeRow,
  StyledDayButton,
  StyledTimeInput,
  StyledTimeRow,
  StyledTimeText,
  StyledToggle,
} from './BreakTime.style'
import { BreakTimeInputProps } from '../../types/types'

const days = ['월', '화', '수', '목', '금', '토', '일']

export const BreakTime = ({
  time,
  index,
  setBreakTimes,
  breakTimes,
}: BreakTimeInputProps) => {
  const toggleDay = (idx: number) => {
    const newBreakTimes = [...breakTimes]
    newBreakTimes[index].selectedDays[idx] =
      !newBreakTimes[index].selectedDays[idx]
    setBreakTimes(newBreakTimes)
  }

  const handleTimeChange = (field: 'start' | 'end', value: string) => {
    const newBreakTimes = [...breakTimes]
    newBreakTimes[index][field] = value
    setBreakTimes(newBreakTimes)
  }

  return (
    <div key={index}>
      <StyledBreakTimeRow>
        {days.map((day, idx) => (
          <StyledDayButton
            key={idx}
            selected={time.selectedDays[idx]}
            onClick={() => toggleDay(idx)}
          >
            {day}
          </StyledDayButton>
        ))}
      </StyledBreakTimeRow>
      <StyledTimeRow>
        <StyledTimeInput
          type="time"
          value={time.start}
          onChange={(e) => handleTimeChange('start', e.target.value)}
        />
        <StyledTimeText>부터</StyledTimeText>
        <StyledTimeInput
          type="time"
          value={time.end}
          onChange={(e) => handleTimeChange('end', e.target.value)}
        />
        <StyledTimeText>까지</StyledTimeText>
        <StyledToggle />
      </StyledTimeRow>
    </div>
  )
}
