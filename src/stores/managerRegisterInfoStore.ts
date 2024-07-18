import { create } from 'zustand'

interface RegisterState {
  //일단 랜더링 용도로 타입 설정, 나중에 정보 더추가(ex. 사업자 이름 등등)
  isRegistered: boolean
  setIsRegistered: (isRegistered: boolean) => void
}

const registerInfoStore = create<RegisterState>((set) => ({
  isRegistered: false,
  setIsRegistered: (isRegistered) => set({ isRegistered }),
}))

export default registerInfoStore
