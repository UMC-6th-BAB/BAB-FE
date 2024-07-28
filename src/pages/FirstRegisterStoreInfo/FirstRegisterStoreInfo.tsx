import Back from '../../assets/RegisterStoreInfo/back.svg'
import errorIcon from '../../assets/RegisterStoreInfo/warnning.svg'
import {
  StyledScrollableContent,
  StyledBackIcon,
  StyledButton,
  StyledContainer,
  StyledFormContainer,
  StyledFormInput,
  StyledLabel,
  StyledNavImg,
  StyledNavImgWrapper,
  StyledNavText,
  StyledRow,
  StyledSearchInput,
  StyledSection,
  StyledTitle,
  StyledUploadBox,
  StyledUploadImg,
  StyledUploadText,
  StyledErrorMessage,
  StyledInputContainer,
  StyledSearchInputContainer,
} from './FirstRegisterStoreInfo.style'
import UploadImg from '../../assets/RegisterStoreInfo/upload.svg'
import nav from '../../assets/RegisterStoreInfo/firststep.svg'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useRef } from 'react'
import useImageUploader from '../../hooks/useImageUpload'
import { useErrorInput } from '../../hooks/useErrorInput'

export default function FirstRegisterStoreInfo() {
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { selectedImage, handleUpload } = useImageUploader()

  const storeLink = useErrorInput('')
  const school = useErrorInput('')

  const handleNext = () => {
    const isStoreLinkValid = storeLink.validate('링크를 입력해 주세요.')
    const isSchoolValid = school.validate('학교를 선택해 주세요.')

    if (isStoreLinkValid && isSchoolValid) {
      navigate('/secondRegisterStoreInfo')
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <StyledContainer>
      <StyledRow>
        <StyledBackIcon onClick={handleBack} src={Back} />
        <StyledTitle>가게 정보 등록</StyledTitle>
      </StyledRow>
      <StyledNavImgWrapper>
        <StyledNavImg src={nav} />
        <StyledNavText>
          <div>기본 정보</div>
          <div>영업 시간</div>
          <div>메뉴 등록</div>
        </StyledNavText>
      </StyledNavImgWrapper>
      <StyledScrollableContent>
        <StyledFormContainer>
          <StyledLabel>가게 이름</StyledLabel>
          <StyledFormInput type="text" placeholder="밥이득 김치찌개" />
          <StyledInputContainer>
            <StyledLabel>가게 링크</StyledLabel>
            {storeLink.error && (
              <StyledErrorMessage>
                <img src={errorIcon} alt="Error icon" />
                {storeLink.error}
              </StyledErrorMessage>
            )}
          </StyledInputContainer>
          <StyledFormInput
            type="text"
            placeholder="링크를 입력해 주세요."
            value={storeLink.value}
            onChange={storeLink.onChange}
            className={storeLink.error ? 'invalid' : ''}
          />
          <StyledSection>
            <StyledLabel>가게 배너 사진 등록</StyledLabel>
            <StyledUploadBox onClick={() => fileInputRef.current?.click()}>
              {selectedImage ? (
                <img
                  src={selectedImage.thumbnail}
                  alt="Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <>
                  <StyledUploadImg src={UploadImg} alt="업로드 아이콘" />
                  <StyledUploadText>
                    갤러리에서 이미지 등록하기
                  </StyledUploadText>
                </>
              )}
            </StyledUploadBox>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={
                handleUpload as (e: ChangeEvent<HTMLInputElement>) => void
              }
            />
          </StyledSection>
          <StyledSearchInputContainer>
            <StyledLabel>학교 선택</StyledLabel>
            {school.error && (
              <StyledErrorMessage>
                <img src={errorIcon} alt="Error icon" />
                {school.error}
              </StyledErrorMessage>
            )}
          </StyledSearchInputContainer>
          <StyledSearchInput
            type="text"
            placeholder="학교 선택"
            value={school.value}
            onChange={school.onChange}
            className={school.error ? 'invalid' : ''}
          />
          <StyledButton onClick={handleNext}>다음</StyledButton>
        </StyledFormContainer>
      </StyledScrollableContent>
    </StyledContainer>
  )
}
