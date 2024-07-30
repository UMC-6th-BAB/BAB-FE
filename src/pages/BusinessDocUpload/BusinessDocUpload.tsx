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
import Loading from '@components/Loading/loading'
import { useEffect, useState } from 'react'
import UploadSuccess from '@components/UploadSuccess/UploadSuccess'
import UploadFail from '@components/UploadFail/UploadFail'

export default function BusinessDocUpload() {
  const navigate = useNavigate()
  const { selectedImage, handleImgUpload, openCamera, fileInputRef } =
    useImageUpload()
  const [isLoading, setIsLoading] = useState(false)
  const [isUploadSuccess, setIsUploadSuccess] = useState<boolean | null>(null)

  useEffect(() => {
    if (selectedImage) {
      handleUpload()
    }
  }, [selectedImage])

  const handleUpload = async () => {
    setIsLoading(true)

    try {
      // 임시 API 처리 - 항상 성공하는 것으로 가정
      // 나중에는 아예 따로 분리해서 코드 작성할 예정임다
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setIsUploadSuccess(true)
    } catch (error) {
      setIsUploadSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

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

  if (isLoading) {
    return <Loading />
  }

  if (isUploadSuccess === true) {
    return <UploadSuccess retry={() => setIsUploadSuccess(null)} />
  }

  if (isUploadSuccess === false) {
    return <UploadFail retry={() => setIsUploadSuccess(null)} />
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
          <StyledUploadImg src={UploadImg} alt="업로드 아이콘" />
          <StyledUploadText>카메라로 등록</StyledUploadText>
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
