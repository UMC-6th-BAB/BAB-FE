import RegistrationPrompt from '@components/RegistrationPrompt'
import { ManagerRegisterState } from '@stores/managerRegisterInfoStore'
import managerRegisterInfoStore from '@stores/managerRegisterInfoStore'
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
import icon from '@assets/managerMypage/등록증 아이콘.png'
import menuIcon from '@assets/managerMypage/메뉴아이콘.png'
import bellIcon from '@assets/icons/bell.png'
import useModalStore from '@stores/modalStore'
import { useEffect, useState } from 'react'
import DiscountModal from '@components/Modal/DiscountModal'
import ManagerCompletedCard from '@components/ManagerCompletedCard/ManagerCompletedCard'
import storeInfoStore from '@stores/storeInfoStore'

export default function ManagerPage() {
  const { isRegistered, setIsRegistered, setManagerRegistrationInfo } =
    managerRegisterInfoStore()
  const { isStoreRegistered, setStoreRegistered } = storeInfoStore()
  const { openModal } = useModalStore()
  const [businessData, setBusinessData] = useState<ManagerRegisterState | null>(
    null,
  )

  useEffect(() => {
    if (isRegistered) {
      setBusinessData(managerRegisterInfoStore.getState())
    } else {
      setBusinessData(null)
    }
  }, [isRegistered])

  const handleManagerRegisterClick = (): void => {
    setIsRegistered(true)
    setManagerRegistrationInfo({
      managerName: '고서현',
      isRegistered: true,
      registrationNumber: 12345678,
      businessName: '예제 사업자명',
      businessAddress: '예제 주소',
      industry: '업태',
      item: '종목',
    })
  }

  const handleStoreRegisterClick = (): void => {
    setStoreRegistered(true)
    openModal()
  }

  return (
    <ManagerPageContainer>
      <Title>
        <TitleText>마이페이지</TitleText>
        <NotifyIcon src={bellIcon} />
      </Title>
      {isStoreRegistered ? (
        <ManagerCompletedCard />
      ) : (
        <Card>
          <CardTitle>
            <RegistrationPrompt
              isRegistered={isRegistered}
              businessData={businessData ? [businessData] : null}
            />
          </CardTitle>
          {isRegistered && businessData ? (
            <>
              <CardImage src={menuIcon} alt="메뉴 아이콘" />
              <Button onClick={handleStoreRegisterClick}>
                가게 등록하러 가기
              </Button>
            </>
          ) : (
            <>
              <CardImage src={icon} alt="등록증 아이콘" />
              <Button onClick={handleManagerRegisterClick}>
                사업자 정보 등록하기
              </Button>
            </>
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
      {isStoreRegistered ? <DiscountModal /> : null}
    </ManagerPageContainer>
  )
}
