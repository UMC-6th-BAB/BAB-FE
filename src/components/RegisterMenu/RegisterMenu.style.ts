import styled, { css } from 'styled-components'

export const StyledMenuRow = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  width: 100%;
`
export const StyledMenuInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const StyledUploadBox = styled.div`
  box-sizing: border-box;
  border: 0.4px solid #e7e7e7;
  width: 93px;
  height: 93px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  margin-right: 10px;
  overflow: hidden;
`

export const StyledUploadImg = styled.img<{ $isthumbnail: number }>`
  ${({ $isthumbnail }) =>
    $isthumbnail
      ? css`
          width: 100%;
          height: 100%;
          object-fit: cover;
        `
      : css`
          width: 29px;
          height: 29px;
        `}
`
export const StyledMenuInput = styled.input`
  width: 205px;
  height: 36px;
  padding-left: 10px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 0.5px solid #979797;
`

export const StyledMenuLabel = styled.label`
  color: #979797;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const StyledPriceDiv = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`

export const StyledCheckBox = styled.input.attrs({ type: 'checkbox' })`
  width: 18px;
  height: 18px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: #f8f8f8;
  border: 0.4px solid #d7d7d7;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:checked {
    background-color: #f8f8f8;
    &::after {
      content: '✓';
      color: #777777;
      font-size: 20px;
    }
  }
`
export const StyledCheckboxContainer = styled.div`
  padding-left: 10px;
  margin-bottom: 10px;
`
