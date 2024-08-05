import { useState, useEffect } from 'react'

type UploadImage = {
  file: File
  thumbnail: string
  type: string
}

export default function useImageLoad() {
  const [selectedImage, setSelectedImage] = useState<UploadImage | null>(null)

  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage.thumbnail)
      }
    }
  }, [selectedImage])

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0])
      setSelectedImage({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.split('/')[0],
      })
    }
  }

  return {
    selectedImage,
    handleUpload,
  }
}
