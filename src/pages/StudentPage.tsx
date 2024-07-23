import StudentPageCardTop from '../components/MyPageCard/StudentPageCardTop/StudentPageCardTop'
import StudentPageCardAccount from '../components/MyPageCard/Account/StudentPageCardAccount'
import DiscountInfo from '../components/MyPageCard/DiscountInfo/DiscountInfo'

import styled from 'styled-components'
import { useState } from 'react'

const StudentPage = () => {
  const [isSchoolSet, setIsSchoolSet] = useState<boolean>(true)
  return (
    <Container>
      <StudentPageCardTop isSchoolSet={isSchoolSet} />
      {isSchoolSet ? <DiscountInfo /> : null}
      <StudentPageCardAccount />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 104px;
`

export default StudentPage
