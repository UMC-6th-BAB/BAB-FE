import {
  ManagerPageContainer,
  Title,
  Card,
  CardImage,
  CardTitle,
  Button,
  AccountInfo,
  AccountDetail,
  AccountActions,
} from './ManagerPage.style'
import icon from '@assets/icons/등록증 아이콘.png'

export default function ManagerPage() {
  return (
    <ManagerPageContainer>
      <Title>마이페이지</Title>
      <Card>
        <CardTitle>정준영 사장님! 사업자 등록증을 등록해주세요.</CardTitle>
        <CardImage src={icon} alt="등록증 아이콘" />
        <Button>가게 등록</Button>
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
