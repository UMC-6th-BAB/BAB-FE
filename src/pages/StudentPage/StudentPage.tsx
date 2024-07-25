import StudentPageCardTop from '../../components/MyPageCard/StudentPageCardTop/StudentPageCardTop'
import StudentPageCardAccount from '../../components/MyPageCard/Account/StudentPageCardAccount'
import DiscountInfo from '../../components/MyPageCard/DiscountInfo/DiscountInfo'

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
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  margin-top: 104px;
  background-color: #f8f8f8;
  padding-bottom: 20px;
`

export default StudentPage
