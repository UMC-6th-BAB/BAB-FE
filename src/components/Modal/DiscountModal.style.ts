import styled from 'styled-components'

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const ModalTextWrapper = styled.div`
  font-size: 1rem;
  color: #333;
  margin: 0 0 10px;
  text-align: center;
  font-weight: bold;
  line-height: 0.5;

  &:last-child {
    margin-bottom: 0;
  }
`

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 252px;
  height: 300px;
  background: white;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
`

export const Button = styled.button<{ gray?: string }>`
  width: 203px;
  height: 41px;
  background: ${({ gray }) => (gray ? '#EEEEEE' : '#ffc107')};
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  font-size: 1rem;
  margin-top: 10px;
  color: ${({ gray }) => (gray ? '767676' : 'white')};
  cursor: pointer;
`
