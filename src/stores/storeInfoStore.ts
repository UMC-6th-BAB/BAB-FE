import { produce } from 'immer'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StoreName {
  storeName: string
  saveStoreName: (storeName: string) => void
}

export const useStoreName = create<StoreName>((set) => ({
  storeName: '',
  saveStoreName: (name) => set({ storeName: name }),
}))

interface BusinessHours {
  day: string
  open: string
  close: string
  isChecked: boolean
}

export interface MenuItem {
  //할인된 가격 생각도 해야될듯
  menuId: number
  image: string
  name: string
  price: number
  discountPrice: number // 할인 가격 추가
  isDiscounted?: boolean // 추가된 필드
}

export interface StoreInfo {
  id: number // 가게 ID 추가
  name: string
  lat: number | null | undefined //경도 위도 추가
  lng: number | null | undefined
  storeLink: string
  isStoreRegistered: boolean
  image: string
  university: string
  businessHours: BusinessHours[]
  breakTime: BusinessHours[]
  menu: MenuItem[]
}

interface StoreInfoState {
  storeInfos: StoreInfo[]
  isStoreRegistered: boolean
  setStoreInfo: (info: StoreInfo) => void
  tempAddStoreInfo: (
    storeId: number,
    name: string,
    lat: number | null | undefined,
    lng: number | null | undefined,
  ) => void
  addStoreInfo: (info: StoreInfo) => void // 새로운 가게를 추가하는 액션 추가
  setStoreRegistered: (registered: boolean) => void
  registerStore: (storeId: number) => void
  addMenu: (storeId: number, name: string) => void
  deleteMenu: (storeId: number, menuId: number) => void
  updateMenuDiscount: (
    storeId: number, // 가게 ID 추가
    menuId: number,
    discountPrice?: number,
    isDiscounted?: boolean,
  ) => void
  removeStoreInfo: (storeId: number) => void // 추가
}

const storeInfoStore = create(
  persist<StoreInfoState>(
    (set) => ({
      storeInfos: [],
      isStoreRegistered: false,
      setStoreInfo: (info) =>
        set((state) => ({
          storeInfos: state.storeInfos.map((store) =>
            store.id === info.id ? info : store,
          ),
        })),
      tempAddStoreInfo: (storeId, name, lat, lng) =>
        set((state) => ({
          storeInfos: [
            ...state.storeInfos,
            {
              name,
              id: storeId,
              lat,
              lng,
              isStoreRegistered: false,
              storeLink: '',
              image: '',
              university: '',
              businessHours: [],
              breakTime: [],
              menu: [],
            },
          ],
        })),
      addStoreInfo: (info) =>
        set((state) => {
          const updatedStoreInfos = [...state.storeInfos, info]
          console.log('Updated Store Infos:', updatedStoreInfos)
          return {
            storeInfos: updatedStoreInfos,
            isStoreRegistered: true,
          }
        }),
      setStoreRegistered: (registered) =>
        set({ isStoreRegistered: registered }),
      registerStore: (storeId) =>
        set(
          produce((state: StoreInfoState) => {
            const store = state.storeInfos.find((info) => info.id === storeId)
            if (store) {
              store.isStoreRegistered = true
            }
          }),
        ),
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
      updateMenuDiscount: (storeId, menuId, discountPrice, isDiscounted) =>
        set((state) => ({
          storeInfos: state.storeInfos.map((store) =>
            store.id === storeId
              ? {
                  ...store,
                  menu: store.menu.map((item) =>
                    item.menuId === menuId
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
      //메뉴 추가 기능

      addMenu: (storeId, name) =>
        set(
          produce((state: StoreInfoState) => {
            const store = state.storeInfos.find((store) => store.id === storeId)
            if (store) {
              store.menu.push({
                name,
                menuId: store.menu.length + 1,
                image: '',
                price: Math.floor(Math.random() * 7000),
                discountPrice: 0,
                isDiscounted: false,
              })
            }
          }),
        ),
      // 가게 ID 메뉴 ID 받아 해당 메뉴 삭제
      deleteMenu: (storeId, menuId) =>
        set(
          produce((state: StoreInfoState) => {
            const store = state.storeInfos.find((store) => store.id === storeId)
            if (store) {
              const filteredMenu = store.menu.filter(
                (info) => info.menuId !== menuId,
              )
              store.menu = filteredMenu
            }
          }),
        ),
    }),
    {
      name: 'store-info',
      getStorage: () => localStorage,
    },
  ),
)

export default storeInfoStore
