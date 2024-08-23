import axios, { AxiosResponse } from 'axios'

const API = import.meta.env.VITE_API_BASE_URL

interface StoreData {
  name: string
  longitude: number
  latitude: number
  address: string
  streetAddress: string
  storeLink: string
  registration: string
  university: string
}

interface ApiResponse {
  isSuccess: boolean
  code: string
  message: string
  result: {
    id: number
    name: string
    bannerImageUrls: string[]
  }
}

export const postStoreRegister = async (
  StoreData: StoreData,
  token: string,
  bannerFiles?: File[],
) => {
  try {
    const formData = new FormData()
    formData.append('requestDto', JSON.stringify(StoreData))

    if (bannerFiles) {
      bannerFiles.forEach((file) => {
        formData.append('bannerFile', file)
      })
    }

    const response: AxiosResponse<ApiResponse> = await axios.post(
      `${API}/v1/stores`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      },
    )

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
