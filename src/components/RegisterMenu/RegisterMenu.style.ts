import styled, { css } from 'styled-components'

export const StyledMenuRow = styled.div`
  display: flex;
  align-items: center;
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
  border: 0.4px solid #e7e7e7;
  border-radius: 5px;
`
