import axios from 'axios'

const API_BASE_URL = 'http://43.201.218.182:8080'
//기본 엔드포인트는 추후 env에다가 설정해두는게 좋을 거 같네요
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
