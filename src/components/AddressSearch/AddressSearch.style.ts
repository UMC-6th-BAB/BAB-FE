import styled from 'styled-components'

interface ModalBackgroundProps {
  $isOpen: boolean
}

export const StyledModalBackground = styled.div<ModalBackgroundProps>`
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  /* left: 0; */
  width: 400px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1;
`

export const StyledModalContent = styled.div`
  width: 90%;
  height: 60%;
  background-color: #fff;
  padding: 20px;
  /* position: relative; */
  display: flex;
  justify-content: center;
  align-items: center;
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
export const StyledAddressButton = styled.button`
  width: 90px;
  height: 36px;
  color: #000000;
  font-size: 14px;
  border-radius: 4px;
  background-color: #efefef;
  margin-left: 10px;
`
export const StyledAddressInput = styled(StyledFormInput)`
  width: 235px;
  flex: 1;
`
export const StyledRowDiv = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 4px; */
  width: 100%;
`
