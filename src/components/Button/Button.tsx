import styled from 'styled-components'
import { buttonSize, buttonType, fontWeight } from './Button.style'
interface ButtonStyleProps {
  colorType: 'gray' | 'yellow'
  fontWeight?: 'SemiBold' | 'Bold' | 'ExtraBold'
  width: 'half' | 'full' | string
}

const ButtonStyle = styled.button<ButtonStyleProps>`
  cursor: pointer;

  ${(props) =>
    props.width === 'half' || props.width === 'full'
      ? buttonSize[props.width]
      : buttonSize.custom(props.width)}
  height: 47px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px auto;
  border: none;

  ${(props) => props.fontWeight && fontWeight[props.fontWeight]};
  ${(props) => buttonType[props.colorType]?.['normal']};
`

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode
  onClick?: () => void
}

export default function Button({
  children,
  onClick,
  width,
  fontWeight = 'Bold',
  ...styleProps
}: ButtonProps) {
  return (
    <ButtonStyle
      onClick={onClick}
      width={width}
      fontWeight={fontWeight}
      {...styleProps}
    >
      {children}
    </ButtonStyle>
  )
}
