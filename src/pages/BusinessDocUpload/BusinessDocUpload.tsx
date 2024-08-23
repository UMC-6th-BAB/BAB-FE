import React, { useState, useEffect, useRef } from 'react'
import imageCompression from 'browser-image-compression'
import {
  StyledButton,
  StyledContainer,
  StyledLabel,
  StyledSection,
  StyledUploadBox,
  StyledUploadImg,
  StyledUploadText,
} from './BusinessDocUpload.style'

import UploadImg from '@assets/BusinessUploadPage/upload.svg'
import { useNavigate } from 'react-router-dom'
import UploadSuccess from '@components/UploadSuccess/UploadSuccess'
import UploadFail from '@components/UploadFail/UploadFail'
import Loader from '@components/Loader/Loader'
import { postCertificates } from '@apis/postCertificates'
import HeaderTitle from '@components/HeaderTitle/HeaderTitle'
import { LoginStore } from '@stores/loginStore'

export default function BusinessDocUpload() {
  const { kakao_token } = LoginStore((state) => state)
  const navigate = useNavigate()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isUploadSuccess, setIsUploadSuccess] = useState<boolean | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (selectedImage) {
      handleUpload()
    }
  }, [selectedImage])

  const handleImgUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0]
    if (!file) {
      return
    }

    try {
      const compressedFile = await compressImage(file)
      setSelectedImage(compressedFile)
    } catch (error) {
      console.error('이미지 처리 실패', error)
    }
  }

  const compressImage = async (file: File) => {
    const options = {
      maxSizeMB: 0.2,
      maxWidthOrHeight: 1920,
      useWebWorker: true,
    }
    return await imageCompression(file, options)
  }

  const handleUpload = async () => {
    if (!selectedImage) {
      return
    }

    setIsLoading(true)

    try {
      const response = await postCertificates(selectedImage, kakao_token)
      console.log('업로드 성공', response)
      setIsUploadSuccess(true)
      navigate('/uploadSuccess', {
        state: { registrationData: response.result },
      })
    } catch (error) {
      console.error('업로드 실패', error)
      setIsUploadSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  const openCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleNext = () => {
    if (!selectedImage) {
      alert('이미지를 업로드해주세요.')
      return
    }
    if (isUploadSuccess) {
      navigate('/registerSuccess')
    } else {
      alert('이미지 인식이 실패하였습니다.')
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  if (isLoading) {
    return <Loader />
  }
  if (isUploadSuccess === true) {
    return <UploadSuccess retry={() => setIsUploadSuccess(null)} />
  }
  if (isUploadSuccess === false) {
    return <UploadFail retry={() => setIsUploadSuccess(null)} />
  }

  return (
    <StyledContainer>
      <HeaderTitle
        title="사업자 등록증 등록"
        $icon="back"
        onClick={handleBack}
      />
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
