import StudentPageCardTop from '@components/MyPageCard/StudentPageCardTop/StudentPageCardTop'
import StudentPageCardAccount from '@components/MyPageCard/Account/StudentPageCardAccount'
import DiscountInfo from '@components/MyPageCard/DiscountInfo/DiscountInfo'
import { StudentPageContainer, Content } from '../StudentPage/StudentPage.style'
import HeaderTitle from '@components/HeaderTitle/HeaderTitle'
import { studentInfoStore } from '@stores/studentInfoStore'

export default function StudentPage() {
  const { isSchoolSet } = studentInfoStore((state) => state)
  return (
    <StudentPageContainer>
      <HeaderTitle title={'마이페이지'} icon="notification" />
      <Content>
        <StudentPageCardTop />
        {isSchoolSet ? <DiscountInfo /> : null}
        <StudentPageCardAccount />
      </Content>
    </StudentPageContainer>
  )
}
