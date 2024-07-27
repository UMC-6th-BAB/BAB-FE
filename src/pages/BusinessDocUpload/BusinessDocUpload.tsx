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

import UploadImg from '@assets/BusinessUploadPage/upload.svg'
import Back from '@assets/BusinessUploadPage/backIcon.svg'
import { useNavigate } from 'react-router-dom'
import useImageUpload from '@hooks/useImageUpload'

export default function BusinessDocUpload() {
  const navigate = useNavigate()
  const { selectedImage, handleImgUpload, openCamera, fileInputRef } =
    useImageUpload()

  const handleNext = () => {
    if (!selectedImage) {
      alert('이미지를 업로드해주세요.')
      return
    }
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
      <StyledSection onClick={openCamera}>
        <StyledLabel>사진으로 등록하기</StyledLabel>
        <StyledUploadBox>
          {selectedImage ? (
            <img
              src={URL.createObjectURL(selectedImage)}
              alt="미리보기"
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
            />
          ) : (
            <>
              <StyledUploadImg src={UploadImg} alt="업로드 아이콘" />
              <StyledUploadText>카메라로 등록</StyledUploadText>
            </>
          )}
        </StyledUploadBox>
      </StyledSection>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        ref={fileInputRef}
        onChange={handleImgUpload}
        style={{ display: 'none' }}
      />
      <StyledButton onClick={handleNext}>다음</StyledButton>
    </StyledContainer>
  )
}
