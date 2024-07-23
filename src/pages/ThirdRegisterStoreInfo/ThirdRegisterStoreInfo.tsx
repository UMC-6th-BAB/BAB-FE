import { useNavigate } from 'react-router-dom'
import Back from '../../assets/RegisterStoreInfo/Back.png'
import Camera from '../../assets/RegisterStoreInfo/camera.png'
import nav from '../../assets/RegisterStoreInfo/thirdstep.png'
import {
  StyledBackIcon,
  StyledButton,
  StyledContainer,
  StyledFormContainer,
  StyledLabel,
  StyledMenuAddButton,
  StyledMenuInput,
  StyledMenuInputContainer,
  StyledMenuRow,
  StyledMenuTable,
  StyledNavImg,
  StyledNavImgWrapper,
  StyledNavText,
  StyledRow,
  StyledTitle,
  StyledUploadBox,
  StyledUploadImg,
  StyledUploadText,
} from './ThirdRegisterStoreInfo.style'

export default function ThirdRegisterStoreInfo() {
  const navigate = useNavigate()
  const handleNext = () => {}
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
      <StyledFormContainer>
        <StyledLabel>메뉴 정보</StyledLabel>
        <StyledMenuTable>
          <StyledUploadText>
            * 가격은 1인분 기준으로 입력해주세요.
          </StyledUploadText>
          <StyledMenuRow>
            <StyledUploadBox>
              <StyledUploadImg src={Camera} alt="업로드 아이콘" />
            </StyledUploadBox>
            <StyledMenuInputContainer>
              <StyledMenuInput type="text" placeholder="메뉴 이름" />
              <StyledMenuInput type="text" placeholder="가격" />
            </StyledMenuInputContainer>
          </StyledMenuRow>
          <StyledMenuRow>
            <StyledUploadBox>
              <StyledUploadImg src={Camera} alt="업로드 아이콘" />
            </StyledUploadBox>
            <StyledMenuInputContainer>
              <StyledMenuInput type="text" placeholder="메뉴 이름" />
              <StyledMenuInput type="text" placeholder="가격" />
            </StyledMenuInputContainer>
          </StyledMenuRow>
          <StyledMenuAddButton>메뉴 추가하기</StyledMenuAddButton>
        </StyledMenuTable>
        <StyledButton onClick={handleNext}>다음</StyledButton>
      </StyledFormContainer>
    </StyledContainer>
  )
}
