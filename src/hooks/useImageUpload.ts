import { useState, useRef } from 'react'

const useImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement | null>(null)

  const openCamera = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleImgUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null
    if (file) {
      setSelectedImage(file)
      console.log('이미지 선택됨:', file)
      // 콘솔 추후에 삭제하겠습니당
    }
  }

  return {
    selectedImage,
    handleImgUpload,
    openCamera,
    fileInputRef,
  }
}

export default useImageUpload
