import styled from 'styled-components'
import { buttonSize, buttonType, fontWeight } from './Button.style'
interface ButtonStyleProps {
  state: 'normal'
  width: string
  colorType: 'gray' | 'yellow'
  fontWeight?: 'SemiBold' | 'Bold' | 'ExtraBold'
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  cursor: pointer;
  width: ${(props) => props.width};
  height: 47px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px auto;
  border: none;

  ${(props) => props.fontWeight && fontWeight[props.fontWeight]};
  ${(props) => buttonType[props.colorType]?.[props.state]};
`

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  children,
  onClick,
  fontWeight = 'Bold',
  ...styleProps
}: ButtonProps) {
  return (
    <ButtonStyle {...styleProps} onClick={onClick} fontWeight={fontWeight}>
      {children}
    </ButtonStyle>
  )
}
