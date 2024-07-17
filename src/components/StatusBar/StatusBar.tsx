import { StatusBarContainer } from './StatusBar.style'
import { Time } from './StatusBar.style'
import { StatusIcons } from './StatusBar.style'
import { Icon } from './StatusBar.style'
import { FaWifi, FaBatteryFull, FaSignal } from 'react-icons/fa'

export default function StatusBar() {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <StatusBarContainer>
      <Time>{currentTime}</Time>
      <StatusIcons>
        <Icon>
          <FaSignal />
        </Icon>
        <Icon>
          <FaWifi />
        </Icon>
        <Icon>
          <FaBatteryFull />
        </Icon>
      </StatusIcons>
    </StatusBarContainer>
  )
}
