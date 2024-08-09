import styled from 'styled-components'
import bellIcon from '@assets/icons/bell.svg'

const Icon = styled.img`
  width: 25px;
  height: 25px;
`

export default function NotifyIcon() {
  return <Icon src={bellIcon} alt="Notification Icon" />
}
