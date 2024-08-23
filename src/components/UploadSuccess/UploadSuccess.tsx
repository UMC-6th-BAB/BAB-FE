import { useNavigate, useLocation } from 'react-router-dom'
import {
  StyledButton,
  StyledButtonContainer,
  StyledContainer,
  StyledInfoContainer,
  StyledInfoRow,
  StyledLabel,
  StyledText,
  StyledValue,
} from './UploadSuccess.style'
import { useEffect, useState } from 'react'
import { useStoreName } from '@stores/storeInfoStore'
import managerRegisterInfoStore from '@stores/managerRegisterInfoStore'

interface UploadSuccessProps {
  retry: () => void
}

export default function UploadSuccess({ retry }: UploadSuccessProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const saveStoreName = useStoreName((state) => state.saveStoreName)
  const { setIsRegistered } = managerRegisterInfoStore()

  const [registrationData, setRegistrationData] = useState({
    registrationNumber: '',
    storeName: '',
    address: '',
    businessTypes: '',
    categories: '',
  })

  useEffect(() => {
    if (location.state && location.state.registrationData) {
      console.log(location.state.registrationData)
      setRegistrationData(location.state.registrationData)
    }
  }, [location.state])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleNextClick = () => {
    saveStoreName(registrationData.storeName)
    setIsRegistered(true)
    navigate('/registerSuccess')
  }

  const RetryClick = () => {
    retry()
    navigate('/businessdocupload')
  }

  return (
    <StyledContainer>
      <StyledText>
        알려주신 정보를
        <br />
        다음과 같이 인식했어요!
      </StyledText>

      <StyledInfoContainer>
        <StyledInfoRow>
          <StyledLabel>등록번호</StyledLabel>
          <StyledValue
            name="registrationNumber"
            type="text"
            value={registrationData.registrationNumber}
            onChange={handleInputChange}
          />
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>상호(법인명)</StyledLabel>
          <StyledValue
            name="storeName"
            type="text"
            value={registrationData.storeName}
            onChange={handleInputChange}
          />
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>사업장 주소</StyledLabel>
          <StyledValue
            name="address"
            type="text"
            value={registrationData.address}
            onChange={handleInputChange}
          />
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>업태</StyledLabel>
          <StyledValue
            name="businessTypes"
            type="text"
            value={registrationData.businessTypes}
            onChange={handleInputChange}
          />
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>종목</StyledLabel>
          <StyledValue
            name="categories"
            type="text"
            value={registrationData.categories}
            onChange={handleInputChange}
          />
        </StyledInfoRow>
      </StyledInfoContainer>

      <StyledButtonContainer>
        <StyledButton onClick={RetryClick} $Color="#111111" $bgColor="#d7d7d7">
          다시 촬영할게요
        </StyledButton>
        <StyledButton
          onClick={handleNextClick}
          $Color="#FFFFFF"
          $bgColor="#fdd100"
        >
          정보가 맞아요!
        </StyledButton>
      </StyledButtonContainer>
    </StyledContainer>
  )
}
