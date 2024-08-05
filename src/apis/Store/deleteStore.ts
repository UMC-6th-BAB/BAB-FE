import axios from 'axios'

const API_BASE_URL = 'http://43.201.218.182:8080' // 실제 API 기본 URL로 대체하기

export const deleteStore = async (storeId: number) => {
  try {
    const response = await axios.delete(`/v1/stores/${storeId}`)
    console.log(response.data)
    return response.data.result.id
  } catch (error) {
    console.error('Error deleting store:', error)
    throw error
  }
}
