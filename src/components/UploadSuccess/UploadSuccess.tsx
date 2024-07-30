import { useNavigate } from 'react-router-dom'
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

interface UploadSuccessProps {
  retry: () => void
}

export default function UploadSuccess({ retry }: UploadSuccessProps) {
  const dummyData = {
    registrationNumber: '000-00-0000',
    companyName: '밥이득 김치찌개',
    businessAddress: '서울특별시 마포구 OO길 13 (OO동)',
    businessType: '숙박 및 음식점업',
    businessCategory: '한식 일반 음식점업',
  }

  const [registrationData, setRegistrationData] = useState({
    registrationNumber: '',
    companyName: '',
    businessAddress: '',
    businessType: '',
    businessCategory: '',
  })

  useEffect(() => {
    setRegistrationData(dummyData)
  }, [])

  const navigate = useNavigate()

  const handleNextClick = () => {
    navigate('/registerSuccess')
  }

  const RetryClick = () => {
    retry()
    navigate('/managerUpload')
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
            type="text"
            value={registrationData.registrationNumber}
            readOnly
          />
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>상호(법인명)</StyledLabel>
          <StyledValue
            type="text"
            value={registrationData.companyName}
            readOnly
          />
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>사업장 주소</StyledLabel>
          <StyledValue
            type="text"
            value={registrationData.businessAddress}
            readOnly
          />
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>업태</StyledLabel>
          <StyledValue
            type="text"
            value={registrationData.businessType}
            readOnly
          />
        </StyledInfoRow>
        <StyledInfoRow>
          <StyledLabel>종목</StyledLabel>
          <StyledValue
            type="text"
            value={registrationData.businessCategory}
            readOnly
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
