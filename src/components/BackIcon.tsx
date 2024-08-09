import styled from 'styled-components'
import backIcon from '@assets/icons/back.svg'

const Icon = styled.img`
  width: 10.5px;
  height: 20px;
`

export default function BackIcon() {
  return <Icon src={backIcon} alt="Back Icon" />
}
