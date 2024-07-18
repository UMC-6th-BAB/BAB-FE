import RegistrationPrompt from '../../components/RegistrationPrompt'
import registerInfoStore from '../../stores/managerRegisterInfoStore'
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
import bellIcon from '@assets/bell.png'

export default function ManagerPage() {
  const { isRegistered, setIsRegistered } = registerInfoStore()
  return (
    <ManagerPageContainer>
      <Title>
        <TitleText>마이페이지</TitleText>
        <NotifyIcon src={bellIcon} />
      </Title>
      <Card>
        <CardTitle>
          <RegistrationPrompt isRegistered={isRegistered} />
        </CardTitle>
        <CardImage src={icon} alt="등록증 아이콘" />
        <Button onClick={() => setIsRegistered(!isRegistered)}>
          {isRegistered ? '정보 등록' : '가게 등록'}
        </Button>
        {/* 가게 등록 버튼 누르면 나중애 라우팅 해주기*/}
      </Card>
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
    </ManagerPageContainer>
  )
}
