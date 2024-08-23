import { getOwnerMypage } from '@apis/getOwnerMypage'
import icon from '@assets/managerMypage/등록증 아이콘.svg'
import menuIcon from '@assets/managerMypage/메뉴아이콘.svg'
import ArrowImg from '@assets/StudentPage/arrow.svg'
import HeaderTitle from '@components/HeaderTitle/HeaderTitle'
import ManagerCompletedCard from '@components/ManagerCompletedCard/ManagerCompletedCard'
import DiscountModal from '@components/Modal/DiscountModal'
import MyPageCardAccount from '@components/MyPageCard/Account/MyPageCardAccount'
import { StyledCard } from '@components/MyPageCard/MyPageCard.style'
import {
  Btn,
  ImgBtnContainer,
  StyledArrow,
} from '@components/MyPageCard/MyPageCardTop/MyPageCardTop.style'
import RegistrationPrompt from '@components/RegistrationPrompt'
import { LoginStore } from '@stores/loginStore'
import managerRegisterInfoStore from '@stores/managerRegisterInfoStore'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ManagerPageContainer } from './ManagerPage.style'

export default function ManagerPage() {
  const navigate = useNavigate()
  const { updateFromApi } = managerRegisterInfoStore()
  const { user, kakao_token, kakaoEmail } = LoginStore((state) => state)
  const [isStoreExist, setIsStoreExist] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    const storedData = localStorage.getItem('manager-info')
    if (storedData) {
      const parsedData = JSON.parse(storedData)
      console.log(parsedData)
      console.log('사업자등록증여부:', parsedData.state.isRegistered)
      setIsRegistered(parsedData.state.isRegistered || false)
    } else {
      console.log('로컬 스토리지에서 데이터를 찾을 수 없습니다.')
    }
  }, [])

  const fetchOwnerData = async () => {
    try {
      const response = await getOwnerMypage(kakao_token)

      if (response.isSuccess) {
        const {
          ownerId,
          ownerNickname,
          storeId,
          storeName,
          isUniversitySetting,
          isStoreExist: isStoreExist,
        } = response.result
        updateFromApi({
          ownerId,
          ownerNickname,
          storeId,
          storeName,
        })
        setIsStoreExist(isStoreExist)
        console.log(isStoreExist)
        console.log(isUniversitySetting)
      } else {
        console.error('Failed to fetch owner mypage data:', response.message)
      }
    } catch (error) {
      console.error('사장님 마이페이지 오류', error)
    }
  }

  useEffect(() => {
    fetchOwnerData()
  }, [])

  const handleManagerRegisterClick = async () => {
    await fetchOwnerData()
    navigate('/businessdocupload')
  }

  const handleStoreRegisterClick = async () => {
    await fetchOwnerData()
    navigate('/firstregisterstoreinfo')
  }

  const renderRegisteredContent = () => (
    <>
      <RegistrationPrompt
        isRegistered={true}
        businessData={[managerRegisterInfoStore.getState()]}
        ownerNickname={user}
      />
      <ImgBtnContainer $gap="12px">
        <img src={menuIcon} alt="메뉴 아이콘" />
        <Btn onClick={handleStoreRegisterClick} $padding="18px">
          가게 등록하러 가기
          <StyledArrow src={ArrowImg} />
        </Btn>
      </ImgBtnContainer>
    </>
  )

  const renderUnregisteredContent = () => (
    <>
      <RegistrationPrompt
        ownerNickname={user}
        isRegistered={false}
        businessData={null}
      />
      <ImgBtnContainer $gap="18px">
        <img src={icon} alt="등록증 아이콘" />
        <Btn onClick={handleManagerRegisterClick} $padding="18px">
          사업자 정보 등록하기
          <StyledArrow src={ArrowImg} />
        </Btn>
      </ImgBtnContainer>
    </>
  )

  return (
    <ManagerPageContainer>
      <HeaderTitle title="마이페이지" $icon="notification" />
      {isStoreExist ? (
        <ManagerCompletedCard />
      ) : (
        <StyledCard $paddingtop="35px" $paddingbottom="26px">
          {isRegistered
            ? renderRegisteredContent()
            : renderUnregisteredContent()}
        </StyledCard>
      )}
      <MyPageCardAccount accountID={kakaoEmail} />
      {isStoreExist && <DiscountModal />}
    </ManagerPageContainer>
  )
}
