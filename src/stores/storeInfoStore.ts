import { create } from 'zustand'
import discountEventStore from './discountEventStore'

interface BusinessHours {
  day: string
  open: string
  close: string
  isChecked: boolean
}

export interface MenuItem {
  //할인된 가격 생각도 해야될듯
  id: number
  image: string
  name: string
  price: number
  isDiscounted?: boolean // 추가된 필드
}

export interface StoreInfo {
  id: number // 가게 ID 추가
  name: string
  storeLink: string
  image: string
  university: string
  businessHours: BusinessHours[]
  breakTime: BusinessHours[]
  menu: MenuItem[]
}

interface StoreInfoState {
  storeInfos: StoreInfo[]
  setStoreInfo: (info: StoreInfo) => void
  addStoreInfo: (info: StoreInfo) => void // 새로운 가게를 추가하는 액션 추가
  isStoreRegistered: boolean
  setStoreRegistered: (registered: boolean) => void
  updateMenuDiscount: (
    storeId: number, // 가게 ID 추가
    menuId: number,
    discountPrice?: number,
    isDiscounted?: boolean,
  ) => void
  removeStoreInfo: (storeId: number) => void // 추가
}

const storeInfoStore = create<StoreInfoState>((set) => ({
  storeInfos: [], // 초기값을 빈 배열로 설정
  setStoreInfo: (info) =>
    set((state) => ({
      storeInfos: state.storeInfos.map((store) =>
        store.id === info.id ? info : store,
      ),
    })),
  addStoreInfo: (info) =>
    set((state) => {
      const updatedStoreInfos = [...state.storeInfos, info]
      console.log('Updated Store Infos:', updatedStoreInfos) // 추가된 가게 정보 확인용 콘솔 로그
      return {
        storeInfos: updatedStoreInfos,
        isStoreRegistered: true,
      }
    }),
  isStoreRegistered: false,
  setStoreRegistered: (registered) => set({ isStoreRegistered: registered }),
  updateMenuDiscount: (storeId, menuId, discountPrice, isDiscounted) =>
    set((state) => ({
      storeInfos: state.storeInfos.map((store) =>
        store.id === storeId
          ? {
              ...store,
              menu: store.menu.map((item) =>
                item.id === menuId
                  ? {
                      ...item,
                      price: isDiscounted
                        ? item.price - (discountPrice || 0)
                        : item.price,
                      isDiscounted: isDiscounted,
                    }
                  : item,
              ),
            }
          : store,
      ),
    })),
  removeStoreInfo: (storeId) => {
    set((state) => {
      const updatedStores = state.storeInfos.filter(
        (store) => store.id !== storeId,
      )
      console.log('Updated Stores:', updatedStores)
      return {
        storeInfos: updatedStores,
        isStoreRegistered: updatedStores.length > 0,
      }
    })
  },
}))

export default storeInfoStore
