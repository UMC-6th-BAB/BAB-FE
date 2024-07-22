import { BusinessInfo } from '@mocks/businessInfo'
import { styled } from 'styled-components'

interface RegistrationPromptProps {
  isRegistered: boolean
  businessData: BusinessInfo[] | null
}

const PromptContainer = styled.div`
  width: auto;
  height: 59px;
`

const PromptText = styled.span`
  display: block;
  font-size: 1.2rem;
  color: #333;
`

export default function RegistrationPrompt({
  isRegistered,
  businessData,
}: RegistrationPromptProps) {
  return (
    <>
      <PromptContainer>
        <PromptText>고서현 사장님!</PromptText>
        {isRegistered && businessData ? (
          <>
            <PromptText>심사가 완료되었습니다</PromptText>
            <PromptText>가게 정보를 등록해주세요.</PromptText>
          </>
        ) : (
          <PromptText>사업자 등록증을 등록해주세요.</PromptText>
        )}
      </PromptContainer>
    </>
  )
}
