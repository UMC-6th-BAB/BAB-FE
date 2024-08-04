import axios from 'axios'

const API_BASE_URL = 'https://api.example.com' // 실제 API 기본 URL로 대체하기

export const deleteStore = async (storeId: number) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/v1/stores/${storeId}`)
    return response.data.result.id
  } catch (error) {
    console.error('Error deleting store:', error)
    throw error
  }
}
