import {
  StyledBackIcon,
  StyledButton,
  StyledContainer,
  StyledLabel,
  StyledRow,
  StyledSection,
  StyledTitle,
  StyledUploadBox,
  StyledUploadImg,
  StyledUploadText,
} from './BusinessDocUpload.style'

import UploadImg from '../../assets/BusinessUploadPage/upload.png'
import Back from '../../assets/BusinessUploadPage/backIcon.png'
import { useNavigate } from 'react-router-dom'

export default function BusinessDocUpload() {
  const navigate = useNavigate()

  const handleImgUpload = () => {
    // TODO: 이미지 업로드
    console.log('이미지 업로드 버튼')
  }

  const handleNext = () => {
    navigate('/registerSuccess')
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <StyledContainer>
      <StyledRow>
        <StyledBackIcon onClick={handleBack} src={Back} />
        <StyledTitle>사업자 등록증 등록</StyledTitle>
      </StyledRow>
      <StyledSection onClick={handleImgUpload}>
        <StyledLabel>사진으로 등록하기</StyledLabel>
        <StyledUploadBox>
          <StyledUploadImg src={UploadImg} alt="업로드 아이콘" />
          <StyledUploadText>카메라로 등록</StyledUploadText>
        </StyledUploadBox>
      </StyledSection>
      <StyledButton onClick={handleNext}>다음</StyledButton>
    </StyledContainer>
  )
}
