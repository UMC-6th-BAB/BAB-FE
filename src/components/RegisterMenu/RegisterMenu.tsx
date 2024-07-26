import Camera from '../../assets/RegisterStoreInfo/camera.svg'
import {
  StyledMenuInput,
  StyledMenuInputContainer,
  StyledMenuRow,
  StyledUploadBox,
  StyledUploadImg,
} from './RegisterMenu.style'

interface RegisterMenuProps {
  index: number
  menu: {
    name: string
    price: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

export const RegisterMenu = ({ index, menu, onChange }: RegisterMenuProps) => (
  <StyledMenuRow>
    <StyledUploadBox>
      <StyledUploadImg src={Camera} alt="업로드 아이콘" />
    </StyledUploadBox>
    <StyledMenuInputContainer>
      <StyledMenuInput
        type="text"
        name="name"
        placeholder="메뉴 이름"
        value={menu.name}
        onChange={(e) => onChange(e, index)}
      />
      <StyledMenuInput
        type="text"
        name="price"
        placeholder="가격"
        value={menu.price}
        onChange={(e) => onChange(e, index)}
      />
    </StyledMenuInputContainer>
  </StyledMenuRow>
)
