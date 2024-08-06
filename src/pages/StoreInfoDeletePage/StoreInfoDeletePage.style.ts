import styled from 'styled-components'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 100%;
  height: 100%;
`

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  position: absolute;
  left: 10px;
`

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 85%;
  height: 60px;
  font-size: 1.2rem;
  color: #333;
  margin: 0px;
  margin-top: 10px;
  font-weight: 700;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px 0;
`
export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  flex-grow: 1;
`

export const DeleteButton = styled.button`
  position: absolute;
  bottom: 30px; /* 하단에서 간격 */
  width: calc(100% - 40px); /* 전체 폭에서 좌우 패딩을 제외 */
  max-width: 342px; /* 최대 너비 설정 */
  padding: 15px;
  background-color: #ffc107;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  box-sizing: border-box;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 85%;
  margin-top: 20px;
`

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 30px;
  margin: 10px 0;
`

export const CheckboxWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 100px;
`

export const CheckboxLabel = styled.label`
  font-size: 0.9rem;
  font-weight: 500;
  color: #666;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  background-color: #fff;

  &:checked {
    background-color: #fff;
  }

  &:checked::after {
    content: '✔';
    color: #000;
    font-size: 14px;
    position: absolute;
    top: 0;
    left: 3px;
  }
`
