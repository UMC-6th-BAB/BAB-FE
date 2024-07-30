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
}

interface RestaurantInfo {
  name: string
  lat: number | null | undefined
  lng: number | null | undefined
  restaurantLink: string
  image: string
  id: string
  university: string
  isDiscount: boolean
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
  setIsDiscount: (id: string) => void
  clearInfo: () => void
  clearTempInfo: () => void
  addMenu: (id: string, name: string) => void
  addTempMenu: (id: string, name: string) => void
  isRestaurantRegistered: boolean
  setRestaurantRegistered: (registered: boolean) => void
}

const restaurantInfoStore = create<RestaurantStore>((set) => ({
  infos: [],
  tempInfos: [],
  restaurantInfo: {
    name: '밥이득 김치찌개',
    restaurantLink: '',
    image: '',
    id: '',
    university: '',
    isDiscount: false,
    businessHours: [],
    breakTime: [],
    menus: [],
  },

  clearInfo: () => set({ infos: [] }),
  clearTempInfo: () => set({ tempInfos: [] }),
  addMenu: (id, name) =>
    set(
      produce((state: RestaurantStore) => {
        const restaurent = state.infos.find((info) => info.id === id)
        if (restaurent) {
          restaurent.menus.push({
            name: name,
            image: '',
            price: Math.floor(Math.random() * 100),
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
  setIsDiscount: (id) =>
    set(
      produce((state: RestaurantStore) => {
        const restaurent = state.infos.find((info) => info.id === id)
        if (restaurent) {
          if (restaurent.menus[0].price > 50) {
            restaurent.isDiscount = false
          } else {
            restaurent.isDiscount = true
          }
        }
      }),
    ),
  setrestaurantInfo: (info) => set({ restaurantInfo: info }),
  isRestaurantRegistered: false,
  setRestaurantRegistered: (registered) =>
    set({ isRestaurantRegistered: registered }),
}))

export default restaurantInfoStore