import { create } from 'zustand'
import { produce } from 'immer'

interface BusinessHours {
  day: string
  open: string
  close: string
  isChecked: boolean
}

interface MenuItem {
  image: string
  name: string
  price: number
  discountPrice: number | null
}

interface RestaurantInfo {
  name: string
  lat: number | null | undefined
  lng: number | null | undefined
  restaurantLink: string
  image: string
  id: string
  university: string
  businessHours: BusinessHours[]
  breakTime: BusinessHours[]
  menus: MenuItem[]
}

interface RestaurantStore {
  restaurantInfo: RestaurantInfo
  infos: RestaurantInfo[]
  tempInfos: RestaurantInfo[]
  addTempInfo: (
    name: string | null | undefined,
    id: string,
    lat: number,
    lng: number,
  ) => void
  addRestaurantInfo: (
    name: string | null | undefined,
    id: string,
    lat: number,
    lng: number,
  ) => void
  setrestaurantInfo: (info: RestaurantInfo) => void
  clearInfo: () => void
  clearTempInfo: () => void
  addMenu: (id: string, name: string) => void
  setDiscountPrice: (id: string) => void
  setTempDiscountPrice: (id: string) => void
  addTempMenu: (id: string, name: string) => void
  isRestaurantRegistered: boolean
  setRestaurantRegistered: (registered: boolean) => void
}

const restaurantInfoStore = create<RestaurantStore>((set) => ({
  infos: [],
  tempInfos: [],
  restaurantInfo: {
    name: '밥이득 김치찌개',
    lat: null,
    lng: null,
    restaurantLink: '',
    image: '',
    id: '',
    university: '',
    businessHours: [],
    breakTime: [],
    menus: [],
  },

  clearInfo: () => set({ infos: [] }),
  clearTempInfo: () => set({ tempInfos: [] }),
  setDiscountPrice: (id) =>
    set(
      produce((state: RestaurantStore) => {
        const restaurent = state.infos.find((info) => info.id === id)
        if (restaurent) {
          restaurent.menus[0].price > 3500
            ? (restaurent.menus[0].discountPrice =
                restaurent.menus[0].price - 2000)
            : (restaurent.menus[0].discountPrice = null)
        }
      }),
    ),
  setTempDiscountPrice: (id) =>
    set(
      produce((state: RestaurantStore) => {
        const restaurent = state.tempInfos.find((info) => info.id === id)
        if (restaurent) {
          restaurent.menus[0].price > 3500
            ? (restaurent.menus[0].discountPrice =
                restaurent.menus[0].price - 2000)
            : (restaurent.menus[0].discountPrice = null)
        }
      }),
    ),
  addMenu: (id, name) =>
    set(
      produce((state: RestaurantStore) => {
        const restaurent = state.infos.find((info) => info.id === id)
        if (restaurent) {
          restaurent.menus.push({
            name: name,
            image: '',
            price: Math.floor(Math.random() * 7000),
            discountPrice: null,
          })
        }
      }),
    ),

  addTempMenu: (id, name) =>
    set(
      produce((state: RestaurantStore) => {
        const realRestaurent = state.infos.find((info) => info.id === id)
        const restaurent = state.tempInfos.find((info) => info.id === id)
        if (restaurent) {
          restaurent.menus.push({
            name: name,
            image: '',
            price: realRestaurent?.menus[0].price,
            discountPrice: null,
          })
        }
      }),
    ),

  addRestaurantInfo: (name, id, lat, lng) =>
    set((state) => ({
      infos: [
        ...state.infos,
        {
          name,
          id,
          lat,
          lng,
          restaurantLink: '',
          image: '',
          university: '',
          isDiscount: false,
          businessHours: [],
          breakTime: [],
          menus: [],
        } as RestaurantInfo,
      ],
    })),

  addTempInfo: (name, id, lat, lng) =>
    set((state) => ({
      tempInfos: [
        ...state.tempInfos,
        {
          name,
          id,
          lat,
          lng,
          restaurantLink: '',
          isDisplayMarker: true,
          image: '',
          university: '',
          isDiscount: false,
          businessHours: [],
          breakTime: [],
          menus: [],
        } as RestaurantInfo,
      ],
    })),
  setrestaurantInfo: (info) => set({ restaurantInfo: info }),
  isRestaurantRegistered: false,
  setRestaurantRegistered: (registered) =>
    set({ isRestaurantRegistered: registered }),
}))

export default restaurantInfoStore
