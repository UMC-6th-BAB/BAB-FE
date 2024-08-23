import axios, { AxiosResponse } from 'axios'

const API = import.meta.env.VITE_API_BASE_URL

interface CertificateResponse {
  isSuccess: boolean
  code: string
  message: string
  result: {
    registrationNumber: string
    storeName: string
    address: string
    businessTypes: string
    categories: string
  }
}

export const postCertificates = async (
  file: File,
): Promise<CertificateResponse> => {
  try {
    const formData = new FormData()
    formData.append('file', file)

    const response: AxiosResponse<CertificateResponse> = await axios.post(
      `${API}/v1/stores/certificates`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MjMsInJvbGUiOiJvd25lciIsImlhdCI6MTcyNDQzMDYzNSwiZXhwIjoxNzI1NjQwMjM1fQ.r3RLWiALl_FVGSBem2nw02uSlXaG6go7cm35dBlBAgs`,
        },
      },
    )

    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}
