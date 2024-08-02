import styled from 'styled-components'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  height: 100vh;
  position: relative;
  padding-bottom: 80px;
`
export const StyledScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
`
export const StyledRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`
export const StyledBackIcon = styled.img`
  height: 20px;
  width: 10.5px;
  position: absolute;
  left: 0;
`
export const StyledTitle = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #111111;
  text-align: center;
  flex-grow: 1;
`

export const StyledFormContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  align-items: center;
`

export const StyledFormLabel = styled.label`
  font-family: 'SUITE';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #111111;
  margin-bottom: 8px;
`

export const StyledLabel = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: #000000;
  margin-bottom: 8px;
  text-align: start;
  width: 347px;
  padding-left: 6px;
`

export const StyledButton = styled.button`
  width: 342px;
  height: 47px;
  background-color: #fdd100;
  color: white;
  font-size: 15px;
  font-weight: 800;
  border-radius: 10px;
  text-align: center;
  position: absolute;
  bottom: 16px;
`
export const StyledTimeTable = styled.div`
  width: 342px;
  max-width: 400px;
  /* margin: 10px 0; */
  background-color: #fff;
  border: 0.4px solid #e7e7e7;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.invalid {
    border: 0.4px solid #ff4d4d;
    background-color: #fff0f0;
  }
`

export const StyledTimeRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`

export const StyledDayLabel = styled.div`
  width: 30px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
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

export const StyledTimeText = styled.div`
  font-size: 14px;
  font-weight: 400;
  margin: 0 5px;
  color: #979797;
`

export const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 26px;
  height: 26px;
  margin-left: auto;
  border-radius: 5px;
  border: 0.4px solid #e7e7e7;
  appearance: none;
  -webkit-appearance: none;
  position: relative;
  &:checked {
    background-color: #fdd100;
    border-color: #e1ba00;
  }
  &:checked::after {
    content: '✓';
    color: white;
    font-size: 18px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

export const StyledBreakTimeContainer = styled.div`
  width: 342px;
  border: 0.4px solid #e7e7e7;
  border-radius: 5px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
`
export const StyledBreakTimeRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const StyledDayButton = styled.button`
  width: 40px;
  height: 28px;
  margin: 0 5px;
  text-align: center;
  border: 0.4px solid #e7e7e7;
  border-radius: 5px;
  background: #ffffff;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
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
export const StyledAddTimeButton = styled.button`
  width: 310px;
  height: 36px;
  margin-top: 10px;
  background-color: #f5f5f5;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  border-radius: 5px;
  border: none;
`

export const StyledNavImgWrapper = styled.div`
  position: relative;
  width: 400px;
  align-self: center;
`

export const StyledNavImg = styled.img`
  width: 100%;
  height: auto;
  display: block;
`
export const StyledNavText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 0 10px;
`
export const StyledErrorMessage = styled.div`
  color: #ff5757;
  font-size: 10px;
  font-weight: 400;
  display: flex;
  align-items: center;
  white-space: nowrap;
  img {
    margin-right: 5px;
    height: 13px;
    width: 13px;
  }
`
export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`
