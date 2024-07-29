/*import { useEffect, useState } from 'react'
import { MdOutlineWifi } from 'react-icons/md'
import { HiChartBar } from 'react-icons/hi2'
import { IoIosBatteryFull } from 'react-icons/io'
import * as S from '@styles/Header.styled'

//임시 지도 헤더

export default function Header() {
  const [timer, setTimer] = useState('00:00')

  useEffect(() => {
    const Timer = setInterval(() => {
      const time = new Date()
      setTimer(
        `${time.getHours() % 12}:${time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}`,
      )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <S.HeaderContainer>
      <S.LeftWrapper>{timer}</S.LeftWrapper>
      <S.BlackBar>하이</S.BlackBar>
      <S.RightWrapper>
        <HiChartBar />
        <MdOutlineWifi />
        <IoIosBatteryFull />
      </S.RightWrapper>
    </S.HeaderContainer>
  )
}
*/
