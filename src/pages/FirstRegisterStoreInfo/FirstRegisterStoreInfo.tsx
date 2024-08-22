import errorIcon from '@assets/RegisterStoreInfo/warnning.svg'
import {
  StyledScrollableContent,
  StyledButton,
  StyledContainer,
  StyledFormContainer,
  StyledFormInput,
  StyledLabel,
  StyledNavImg,
  StyledNavImgWrapper,
  StyledNavText,
  StyledSection,
  StyledUploadBox,
  StyledUploadImg,
  StyledUploadText,
  StyledErrorMessage,
  StyledInputContainer,
} from './FirstRegisterStoreInfo.style'
import UploadImg from '@assets/RegisterStoreInfo/upload.svg'
import nav from '@assets/RegisterStoreInfo/firststep.svg'
import { useNavigate } from 'react-router-dom'
import { ChangeEvent, useRef, useState } from 'react'
import { useErrorInput } from '@hooks/useErrorInput'
import { AddressSearch } from '@components/AddressSearch/AddressSearch'
import useImageLoad from '@hooks/useImageLoad'
import { useStoreName } from '@stores/storeInfoStore'
import { postStoreRegister } from '@apis/postStoreRegister'
import { StoreUniversitySearch } from '@components/StoreUniversitySearch/StoreUniversitySearch'
import storeInfoStore from '@stores/storeInfoStore'
import HeaderTitle from '@components/HeaderTitle/HeaderTitle'
import { LoginStore } from '@stores/loginStore'

export default function FirstRegisterStoreInfo() {
  const { kakao_token } = LoginStore((state) => state)
  const navigate = useNavigate()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { selectedImage, handleUpload } = useImageLoad()
  const { storeName, saveStoreName } = useStoreName()

  const storeLink = useErrorInput('')
  const school = useErrorInput('')
  const [address, setAddress] = useState('')
  const [roadAddress, setRoadAddress] = useState('')
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  // const [storeName, setStoreName] = useState('')
  const addStoreInfo = storeInfoStore((state) => state.addStoreInfo)

  const handleNext = async () => {
    const isStoreLinkValid = storeLink.validate('링크를 입력해 주세요.')
    const isSchoolValid = school.validate('학교를 선택해 주세요.')

    if (isStoreLinkValid && isSchoolValid) {
      const formData = {
        name: storeName,
        address,
        streetAddress: roadAddress,
        longitude,
        latitude,
        storeLink: storeLink.value,
        university: school.value,
        registration: '이건뭐에요',
      }
      try {
        let bannerFiles: File[] | undefined
        if (fileInputRef.current && fileInputRef.current.files) {
          bannerFiles = Array.from(fileInputRef.current.files)
        }

        const response = await postStoreRegister(
          formData,
          kakao_token,
          bannerFiles,
        )

        const { id, name } = response.result

        addStoreInfo({
          id,
          name,
          lat: latitude,
          lng: longitude,
          storeLink: storeLink.value,
          isStoreRegistered: true,
          image: selectedImage?.thumbnail || '',
          university: school.value,
          businessHours: [],
          breakTime: [],
          menu: [],
        })
        navigate('/secondRegisterStoreInfo')
      } catch (error) {
        alert('가게 등록 중 오류가 발생했습니다. 다시 시도해 주세요.')
      }
    }
  }

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <StyledContainer>
      <HeaderTitle title="가게 정보 등록" $icon="back" onClick={handleBack} />
      <StyledNavImgWrapper>
        <StyledNavImg src={nav} />
        <StyledNavText>
          <div>기본 정보</div>
          <div>영업 시간</div>
          <div>메뉴 등록</div>
        </StyledNavText>
      </StyledNavImgWrapper>
      <StyledScrollableContent ref={containerRef}>
        <StyledFormContainer>
          <StyledLabel>가게 이름</StyledLabel>
          <StyledFormInput
            type="text"
            placeholder="밥이득 김치찌개"
            value={storeName}
            onChange={(e) => saveStoreName(e.target.value)}
          />
          <StyledLabel>주소 입력</StyledLabel>
          <AddressSearch
            address={address}
            setAddress={setAddress}
            setRoadAddress={setRoadAddress}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
          />
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
          <StoreUniversitySearch school={school} containerRef={containerRef} />
          <StyledButton onClick={handleNext}>다음</StyledButton>
        </StyledFormContainer>
      </StyledScrollableContent>
    </StyledContainer>
  )
}
