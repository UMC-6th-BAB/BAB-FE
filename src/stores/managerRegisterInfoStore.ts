import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ManagerRegisterState {
  managerName: string
  isRegistered?: boolean
  registrationNumber: number
  businessName: string
  businessAddress: string
  industry: string
  item: string
  isStoreRegistered?: boolean
  ownerId: number
  ownerNickname: string
  storeId: number
  storeName: string
  setIsRegistered: (isRegistered: boolean) => void
  setIsStoreRegistered: (isStoreRegistered: boolean) => void
  setManagerRegistrationInfo: (
    info: Partial<
      Omit<
        ManagerRegisterState,
        | 'setIsRegistered'
        | 'setIsStoreRegistered'
        | 'setManagerRegistrationInfo'
      >
    >,
  ) => void
  updateFromApi: (data: Partial<ManagerRegisterState>) => void
}

const managerRegisterInfoStore = create(
  persist<ManagerRegisterState>(
    (set) => ({
      managerName: '',
      isRegistered: false,
      registrationNumber: 1111,
      businessName: '',
      businessAddress: '',
      industry: '',
      item: '',
      isStoreRegistered: false,
      ownerId: 0,
      ownerNickname: '',
      storeId: 0,
      storeName: '',
      setIsRegistered: (isRegistered) => set({ isRegistered }),
      setIsStoreRegistered: (isStoreRegistered) => set({ isStoreRegistered }),
      setManagerRegistrationInfo: (info) =>
        set((state) => ({ ...state, ...info })),
      updateFromApi: (data) => set((state) => ({ ...state, ...data })),
    }),
    {
      name: 'manager-info',
      getStorage: () => localStorage,
    },
  ),
)
export default managerRegisterInfoStore
