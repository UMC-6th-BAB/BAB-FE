export type OperatingHour = {
  openTime: string
  closeTime: string
}

export type BreakTimeType = {
  start: string
  end: string
  selectedDays: boolean[]
}

export interface BreakTimeInputProps {
  time: BreakTimeType
  index: number
  setBreakTimes: React.Dispatch<React.SetStateAction<BreakTimeType[]>>
  breakTimes: BreakTimeType[]
}
