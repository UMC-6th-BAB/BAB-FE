import Camera from '../../assets/RegisterStoreInfo/camera.svg'
import {
  StyledMenuInput,
  StyledMenuInputContainer,
  StyledMenuRow,
  StyledUploadBox,
  StyledUploadImg,
} from './RegisterMenu.style'
import useImageUploader from '../../hooks/useImageUpload'
import { useRef } from 'react'

interface RegisterMenuProps {
  index: number
  menu: {
    name: string
    price: string
  }
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

export const RegisterMenu = ({ index, menu, onChange }: RegisterMenuProps) => {
  const { selectedImage, handleUpload } = useImageUploader()
  const fileInputRef = useRef<HTMLInputElement>(null)

  return (
    <StyledMenuRow>
      <StyledUploadBox onClick={() => fileInputRef.current?.click()}>
        <StyledUploadImg
          src={selectedImage ? selectedImage.thumbnail : Camera}
          alt={selectedImage ? '미리보기' : '업로드 아이콘'}
          $isthumbnail={selectedImage ? 1 : 0}
        />
      </StyledUploadBox>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleUpload}
      />
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
}
