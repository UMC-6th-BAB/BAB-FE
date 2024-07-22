import RegistrationPrompt from '@components/RegistrationPrompt'
import registerInfoStore from '@stores/managerRegisterInfoStore'
import {
  ManagerPageContainer,
  Title,
  TitleText,
  Card,
  CardImage,
  CardTitle,
  Button,
  AccountInfo,
  AccountDetail,
  AccountActions,
  NotifyIcon,
} from './ManagerPage.style'
import icon from '@assets/icons/등록증 아이콘.png'
import menuIcon from '@assets/icons/메뉴아이콘.png'
import bellIcon from '@assets/bell.png'
import useModalStore from '@stores/modalStore'
import { BusinessInfo, businessInfo } from '@mocks/businessInfo'
import { useEffect, useState } from 'react'
import RegisterModal from '@components/Modal/RegisterModal'
import ManagerCompletedCard from '@components/ManagerCompletedCard/ManagerCompletedCard'
import restaurantInfoStore from '@stores/restaurantInfoStore'

export default function ManagerPage() {
  const { isRegistered, setIsRegistered } = registerInfoStore()
  const { isRestaurantRegistered, setRestaurantRegistered } =
    restaurantInfoStore()
  const { openModal } = useModalStore()
  const [businessData, setBusinessData] = useState<BusinessInfo[] | null>(null)

  useEffect(() => {
    if (isRegistered) {
      setBusinessData(businessInfo)
    } else {
      setBusinessData(null)
    }
  }, [isRegistered])

  const handleRegisterClick = (): void => {
    setIsRegistered(true)
    setBusinessData(businessData) // 등록 후에 사업자 정보 설정
  }

  const handleRestaurantRegisterdClick = (): void => {
    setRestaurantRegistered(true)
    openModal()
  }

  return (
    <ManagerPageContainer>
      <Title>
        <TitleText>마이페이지</TitleText>
        <NotifyIcon src={bellIcon} />
      </Title>
      {isRestaurantRegistered ? (
        <ManagerCompletedCard />
      ) : (
        <Card>
          <CardTitle>
            <RegistrationPrompt
              isRegistered={isRegistered}
              businessData={businessData}
            />
          </CardTitle>
          {isRegistered && businessData ? (
            <CardImage src={menuIcon} alt="메뉴 아이콘" />
          ) : (
            <CardImage src={icon} alt="등록증 아이콘" />
          )}
          {isRegistered && businessData ? (
            <Button onClick={handleRestaurantRegisterdClick}>
              가게 등록하러 가기
            </Button>
          ) : (
            <Button onClick={handleRegisterClick}>사업자 정보 등록하기</Button>
          )}
        </Card>
      )}

      <AccountInfo>
        <AccountDetail className="title">계정</AccountDetail>
        <AccountDetail className="subtitle">
          <span>아이디</span>
          <span>kosoohyeon1</span>
        </AccountDetail>
        <AccountDetail className="divider" />
        <AccountActions>
          <span>비밀번호 변경</span>
          <span>이메일 변경</span>
        </AccountActions>
      </AccountInfo>
      {isRestaurantRegistered ? <RegisterModal /> : null}
    </ManagerPageContainer>
  )
}
