import { create } from 'zustand'

interface BusinessHours {
  day: string
  open: string
  close: string
  isChecked: boolean
}

interface MenuItem {
  //할인된 가격 생각도 해야될듯
  image: string
  name: string
  price: number
  discountPrice?: number
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
  setrestaurantInfo: (info: restaurantInfo) => void
  isRestaurantRegistered: boolean
  setRestaurantRegistered: (registered: boolean) => void
}

const restaurantInfoStore = create<restaurantStore>((set) => ({
  restaurantInfo: {
    name: '밥이득 김치찌개',
    restaurantLink: '',
    image: '',
    university: '',
    businessHours: [],
    breakTime: [],
    menu: [],
  },
  setrestaurantInfo: (info) => set({ restaurantInfo: info }),
  isRestaurantRegistered: false,
  setRestaurantRegistered: (registered) =>
    set({ isRestaurantRegistered: registered }),
}))

export default restaurantInfoStore
