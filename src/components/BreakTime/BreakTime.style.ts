import styled from 'styled-components'

export const StyledBreakTimeRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const StyledDayButton = styled.button<{ selected: boolean }>`
  color: black;
  width: 40px;
  height: 28px;
  margin: 0 5px;
  text-align: center;
  border: 0.4px solid #e7e7e7;
  border-radius: 5px;
  background: ${(props) => (props.selected ? '#fdd100' : '#ffffff')};
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
export const StyledTimeInput = styled.input`
  color: black;
  width: 72px;
  height: 26px;
  margin: 0 10px;
  text-align: center;
  border: 0.4px solid #e7e7e7;
  border-radius: 5px;
`

export const StyledTimeRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  width: 100%;
`
export const StyledTimeText = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 0 5px;
  color: #979797;
`

export const StyledToggle = styled.input.attrs({ type: 'checkbox' })`
  width: 40px;
  height: 20px;
  margin-left: auto;
  -webkit-appearance: none;
  appearance: none;
  background-color: #ccc;
  border-radius: 10px;
  position: relative;
  outline: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:checked {
    background-color: #fdd100;
  }

  &:checked::before {
    transform: translateX(20px);
  }

  &::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    top: 1px;
    left: 1px;
    background: #ffffff;
    transition: transform 0.2s;
  }
`
