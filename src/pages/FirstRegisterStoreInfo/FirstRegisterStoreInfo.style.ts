import styled from 'styled-components'
import search from '../../assets/RegisterStoreInfo/search.svg'

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

export const StyledFormInput = styled.input`
  width: 342px;
  height: 36px;
  padding-left: 10px;
  margin-bottom: 10px;
  border: 0.4px solid #e7e7e7;
  border-radius: 5px;
  &.invalid {
    border: 0.4px solid #ff4d4d;
    background-color: #fff0f0;
  }
`
export const StyledSearchInput = styled.input`
  width: 342px;
  height: 36px;
  padding-left: 10px;
  margin-bottom: 10px;
  border: 0.4px solid #e7e7e7;
  border-radius: 5px;
  background-image: url(${search});
  background-position: right 10px center;
  background-repeat: no-repeat;
  background-size: 20px;
  &.invalid {
    border: 0.4px solid #ff4d4d;
    background-color: #fff0f0;
  }
`

export const StyledSection = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export const StyledUploadBox = styled.div`
  box-sizing: border-box;
  width: 347px;
  height: 200px;
  align-content: center;
  background: #ffffff;
  border-radius: 5px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  width: 95%;
  /* justify-content: space-between; */
`

export const StyledSearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  /* justify-content: space-between; */
`
