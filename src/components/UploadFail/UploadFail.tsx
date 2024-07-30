import Fail from '@assets/BusinessUploadPage/fail.svg'
import {
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledImg,
  StyledText,
} from './UploadFail.style'
import { useNavigate } from 'react-router-dom'

interface UploadFailProps {
  retry: () => void
}

export default function UploadFail({ retry }: UploadFailProps) {
  const navigate = useNavigate()

  const RetryClick = () => {
    retry()
    navigate('/managerUpload')
  }

  const ManagerPageClick = () => {
    navigate('/manager')
  }

  return (
    <StyledContainer>
      <StyledImg src={Fail} />
      <StyledText>
        사업자 등록증이 승인되지 못했어요.
        <br />
        다시 시도해 주세요.
      </StyledText>
      <StyledButtonContainer>
        <StyledButton
          onClick={ManagerPageClick}
          $Color="#111111"
          $bgColor="#d7d7d7"
        >
          나중에 하기
        </StyledButton>
        <StyledButton onClick={RetryClick} $Color="#FFFFFF" $bgColor="#fdd100">
          다시 등록하기
        </StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  )
}
