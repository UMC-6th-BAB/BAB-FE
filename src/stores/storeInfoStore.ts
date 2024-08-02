import { create } from 'zustand'

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

interface StoreInfo {
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
  isStoreRegistered: boolean
  setStoreRegistered: (registered: boolean) => void
  updateMenuDiscount: (
    storeId: number, // 가게 ID 추가
    menuId: number,
    discountPrice?: number,
    isDiscounted?: boolean,
  ) => void
}

const storeInfoStore = create<StoreInfoState>((set) => ({
  storeInfos: [
    {
      id: 1, // 가게 ID 추가
      name: '밥이득 김치찌개',
      storeLink: '',
      image: '',
      university: '',
      businessHours: [],
      breakTime: [],
      menu: [
        {
          id: 0,
          image: '',
          name: '김치찌개',
          price: 8000,
          isDiscounted: false,
        },
        {
          id: 1,
          image: '',
          name: '된장찌개',
          price: 7500,
          isDiscounted: false,
        },
        {
          id: 2,
          image: '',
          name: '계란말이',
          price: 5000,
          isDiscounted: false,
        },
      ],
    },
    // 다른 가게도 추가 가능
  ],
  setStoreInfo: (info) =>
    set((state) => ({
      storeInfos: state.storeInfos.map((store) =>
        store.id === info.id ? info : store,
      ),
    })),
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
}))

export default storeInfoStore
