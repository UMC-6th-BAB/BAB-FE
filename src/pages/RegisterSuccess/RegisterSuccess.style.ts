import styled from 'styled-components'

interface StyledButtonProps {
  $bgColor?: string
  $Color?: string
}

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`

export const StyledImg = styled.img`
  height: 175px;
  width: 177px;
  display: block;
  margin-top: 8%;
`

export const StyledText = styled.p`
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  color: #000000;
  margin-bottom: 30px;
`

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 30px;
  position: absolute;
  bottom: 16px;
`

export const StyledButton = styled.div<StyledButtonProps>`
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.$Color || '#d7d7d7'};
  width: 169px;
  height: 47px;
  border-radius: 10px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: ${(props) => props.$bgColor || '#d7d7d7'};
`
