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
  font-weight: 700;
  font-size: 1.25rem;
  color: #111111;
  text-align: center;
  flex-grow: 1;
`
export const StyledSection = styled.div`
  width: 100%;
  margin-bottom: 16px;
`

export const StyledLabel = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: #000000;
  margin-bottom: 8px;
  text-align: start;
  width: 347px;
  padding-left: 12px;
`
export const StyledUploadBox = styled.div`
  box-sizing: border-box;
  width: 347px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
`

export const StyledUploadImg = styled.img`
  height: 63px;
  width: 63px;
  padding-top: 5%;
`

export const StyledUploadText = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #676767;
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
  left: 50%;
  transform: translateX(-50%);
`
