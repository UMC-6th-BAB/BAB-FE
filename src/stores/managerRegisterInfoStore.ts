import { create } from 'zustand'

export interface ManagerRegisterState {
  managerName: string
  isRegistered: boolean
  registrationNumber: number
  businessName: string
  businessAddress: string
  industry: string
  item: string
  setIsRegistered: (isRegistered: boolean) => void
  setManagerRegistrationInfo: (
    info: Partial<
      Omit<
        ManagerRegisterState,
        'setIsRegistered' | 'setManagerRegistrationInfo'
      >
    >,
  ) => void
}

const managerRegisterInfoStore = create<ManagerRegisterState>((set) => ({
  managerName: '고서현',
  isRegistered: false,
  registrationNumber: 1111,
  businessName: '',
  businessAddress: '',
  industry: '',
  item: '',
  setIsRegistered: (isRegistered) => set({ isRegistered }),
  setManagerRegistrationInfo: (info) => set((state) => ({ ...state, ...info })),
}))

export default managerRegisterInfoStore
