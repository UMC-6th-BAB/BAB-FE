import StudentPageCardTop from '@components/MyPageCard/StudentPageCardTop/StudentPageCardTop'
import StudentPageCardAccount from '@components/MyPageCard/Account/StudentPageCardAccount'
import DiscountInfo from '@components/MyPageCard/DiscountInfo/DiscountInfo'
import {
  StudentPageContainer,
  Content,
  Title,
  TitleText,
  NotifyIcon,
} from '../StudentPage/StudentPage.style'
import { studentInfoStore } from '@stores/studentInfoStore'
import bellIcon from '@assets/icons/bell.svg'

export default function StudentPage() {
  const { isSchoolSet } = studentInfoStore((state) => state)

  return (
    <StudentPageContainer>
      <Title>
        <TitleText>마이페이지</TitleText>
        <NotifyIcon src={bellIcon} />
      </Title>
      <Content>
        <StudentPageCardTop />
        {isSchoolSet ? <DiscountInfo /> : null}
        <StudentPageCardAccount />
      </Content>
    </StudentPageContainer>
  )
}
