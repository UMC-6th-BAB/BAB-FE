import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SyncLoader from 'react-spinners/SyncLoader'
import { LoadContainer } from './OAuth.style'
import loginApi from '@apis/Login/loginApi'
import { LoginStore } from '@stores/loginStore'

export default function OAuth() {
  const navigate = useNavigate()
  const { membertype, setUser, setIsLogined, setToken, setKakaoEmail } =
    LoginStore((state) => state)
  useEffect(() => {
    const handleLogin = async () => {
      const result = await loginApi(membertype)
      if (result) {
        setUser(result.kakaoNickname)
        setToken(result.jwt)
        setIsLogined(true)
        if (membertype === 'manager') {
          setKakaoEmail(result.kakaoEmail)
          //사장
          if (result.isStoreExist) {
            navigate('/map')
          } else {
            navigate('/manager')
          }
        } else {
          //학생
          if (result.isUniversityExist) {
            navigate('/map')
          } else {
            navigate('/studentPage')
          }
        }
      } else {
        //result를 제대로 못 받아왔을 때
        navigate('/signup')
      }
    }
    handleLogin()
  }, [])

  return (
    <LoadContainer>
      <SyncLoader />
    </LoadContainer>
  )
}
