import { useState } from 'react'
import {
  StyledBreakTimeRow,
  StyledDayButton,
  StyledTimeInput,
  StyledTimeRow,
  StyledTimeText,
  StyledToggle,
} from './BreakTime.style'

const days = ['월', '화', '수', '목', '금', '토', '일']

interface BreakTimeInputProps {
  time: { start: string; end: string }
  index: number
}

export const BreakTime = ({ time, index }: BreakTimeInputProps) => {
  const [selectedDays, setSelectedDays] = useState<boolean[]>(
    new Array(days.length).fill(false),
  )

  const toggleDay = (idx: number) => {
    const newSelectedDays = [...selectedDays]
    newSelectedDays[idx] = !newSelectedDays[idx]
    setSelectedDays(newSelectedDays)
  }

  return (
    <div key={index}>
      <StyledBreakTimeRow>
        {days.map((day, idx) => (
          <StyledDayButton
            key={idx}
            selected={selectedDays[idx]}
            onClick={() => toggleDay(idx)}
          >
            {day}
          </StyledDayButton>
        ))}
      </StyledBreakTimeRow>
      <StyledTimeRow>
        <StyledTimeInput type="text" defaultValue={time.start} />
        <StyledTimeText>부터</StyledTimeText>
        <StyledTimeInput type="text" defaultValue={time.end} />
        <StyledTimeText>까지</StyledTimeText>
        <StyledToggle />
      </StyledTimeRow>
    </div>
  )
}
