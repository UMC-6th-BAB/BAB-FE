import { styled } from 'styled-components'
import { ManagerRegisterState } from '@stores/managerRegisterInfoStore'

interface RegistrationPromptProps {
  isRegistered: boolean
  businessData?: ManagerRegisterState[] | null
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
  const managerName =
    businessData && businessData.length > 0 ? businessData[0].managerName : ''
  return (
    <>
      <PromptContainer>
        <PromptText>{managerName} 사장님!</PromptText>
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
