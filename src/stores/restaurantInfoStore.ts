import { create } from 'zustand'

interface BusinessHours {
  day: string
  open: string
  close: string
  isChecked: boolean
}

interface MenuItem {
  //할인된 가격 생각도 해야될듯
  id: number
  image: string
  name: string
  price: number
  isDiscounted?: boolean // 추가된 필드
}

interface restaurantInfo {
  name: string
  restaurantLink: string
  image: string
  university: string
  businessHours: BusinessHours[]
  breakTime: BusinessHours[]
  menu: MenuItem[]
}

interface restaurantStore {
  restaurantInfo: restaurantInfo
  setRestaurantInfo: (info: restaurantInfo) => void
  isRestaurantRegistered: boolean
  setRestaurantRegistered: (registered: boolean) => void
  updateMenuDiscount: (
    id: number,
    discountPrice?: number,
    isDiscounted?: boolean,
  ) => void
}

const RestaurantInfoStore = create<restaurantStore>((set) => ({
  restaurantInfo: {
    name: '밥이득 김치찌개',
    restaurantLink: '',
    image: '',
    university: '',
    businessHours: [],
    breakTime: [],
    menu: [
      //임의로 메뉴 데이터가 있다고 가정
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
  setRestaurantInfo: (info) => set({ restaurantInfo: info }),
  isRestaurantRegistered: false,
  setRestaurantRegistered: (registered) =>
    set({ isRestaurantRegistered: registered }),
  updateMenuDiscount: (id, discountPrice, isDiscounted) =>
    set((state) => ({
      restaurantInfo: {
        ...state.restaurantInfo,
        menu: state.restaurantInfo.menu.map((item) =>
          item.id === id
            ? {
                ...item,
                price: isDiscounted
                  ? item.price - (discountPrice || 0)
                  : item.price,
                isDiscounted: isDiscounted,
              }
            : item,
        ),
      },
    })),
}))

export default RestaurantInfoStore
