import axios from 'axios'
const API = import.meta.env.VITE_API_BASE_URL

export interface OperatingHours {
  day: string
  openTime: string
  closeTime: string
  breakTime: { startTime: string; endTime: string } | Record<string, never>
}

export const getOperatingHours = async (
  storeId: number,
): Promise<OperatingHours[]> => {
  try {
    const response = await axios.get(
      `${API}/v1/stores/${storeId}/operating-hours`,
    )
    return response.data.result as OperatingHours[]
  } catch (error) {
    console.error('가게 운영시간 가져오기 실패', error)
    throw error
  }
}
