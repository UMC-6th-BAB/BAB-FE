import { StyledCard } from '../MyPageCard.style'
import { CardTitle } from '../MyPageCard.style'
import { StyledAccount, Text, Btn } from './StudentPageCardAccount.style'
import { studentInfoStore } from '@stores/studentInfoStore'

export default function StudentPageCardAccount() {
  const { id } = studentInfoStore((state) => state)

  return (
    <StyledCard paddingTop="24px" paddingBottom="21px">
      <CardTitle paddingBottom="18px">계정</CardTitle>
      <StyledAccount>
        <Text>아이디</Text>
        <Text color="#9A9A9A">{id}</Text>
      </StyledAccount>
      <hr
        style={{
          border: '0',
          borderTop: '1.5px solid #F8F8F8',
          width: '294px',
          margin: '11px auto 14px',
          marginRight: '24px',
        }}
      />
      <StyledAccount>
        <Btn>로그아웃</Btn>
      </StyledAccount>
    </StyledCard>
  )
}
