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
  return (
    <div key={index}>
      <StyledBreakTimeRow>
        {days.map((day, idx) => (
          <StyledDayButton key={idx}>{day}</StyledDayButton>
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
