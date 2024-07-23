import Back from '../../assets/RegisterStoreInfo/Back.png'
import {
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
} from './FirstRegisterStoreInfo.style'
import UploadImg from '../../assets/RegisterStoreInfo/upload.png'
import nav from '../../assets/RegisterStoreInfo/firststep.png'
import { useNavigate } from 'react-router-dom'

export default function FirstRegisterStoreInfo() {
  const navigate = useNavigate()

  const handleNext = () => {
    navigate('/secondRegisterStoreInfo')
  }
  const handleBack = () => {
    navigate(-1)
  }
  const handleUpload = () => {
    // TODO: 갤러리에서 이미지 등록하기
    console.log('갤러리에서 이미지 등록하기 버튼')
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
      <StyledFormContainer>
        <StyledLabel>가게 이름</StyledLabel>
        <StyledFormInput type="text" placeholder="밥이득 김치찌개" />
        <StyledLabel>가게 링크</StyledLabel>
        <StyledFormInput type="text" placeholder="링크를 입력해 주세요." />
        <StyledSection onClick={handleUpload}>
          <StyledLabel>가게 배너 사진 등록</StyledLabel>
          <StyledUploadBox>
            <StyledUploadImg src={UploadImg} alt="업로드 아이콘" />
            <StyledUploadText>갤러리에서 이미지 등록하기</StyledUploadText>
          </StyledUploadBox>
        </StyledSection>
        <StyledLabel>학교 선택</StyledLabel>
        <StyledSearchInput type="text" placeholder="학교 선택" />
        <StyledButton onClick={handleNext}>다음</StyledButton>
      </StyledFormContainer>
    </StyledContainer>
  )
}
