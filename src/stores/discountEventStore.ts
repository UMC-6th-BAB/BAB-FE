import { create } from 'zustand'

interface Discount {
  id: number
  name: string
  discountPrice: number
  isChecked: boolean
}

interface DiscountEvent {
  id: number
  startDate: string
  endDate: string
  eventMessage: string
  discounts: Discount[]
}

interface DiscountEventState {
  eventPeriod: { startDate: string; endDate: string }
  eventMessage: string
  discounts: Discount[]
  discountEvents: DiscountEvent[]
  setEventPeriod: (startDate: string, endDate: string) => void
  setEventMessage: (message: string) => void
  setDiscountChecked: (id: number, isChecked: boolean) => void
  setDiscountPrice: (id: number, price: number) => void
  initializeDiscounts: (
    menu: {
      id: number
      image: string
      name: string
      price: number
      discountPrice?: number
      isDiscounted?: boolean
    }[],
  ) => void
  addDiscountEvent: () => void
}

const DiscountEventStore = create<DiscountEventState>((set) => ({
  eventPeriod: { startDate: '', endDate: '' },
  eventMessage: '',
  discounts: [],
  discountEvents: [],
  setEventPeriod: (startDate, endDate) =>
    set({ eventPeriod: { startDate, endDate } }),
  setEventMessage: (message) => set({ eventMessage: message }),
  setDiscountChecked: (id, isChecked) =>
    set((state) => ({
      discounts: state.discounts.map((discount) =>
        discount.id === id ? { ...discount, isChecked: isChecked } : discount,
      ),
    })),
  setDiscountPrice: (id, price) =>
    set((state) => ({
      discounts: state.discounts.map((discount) =>
        discount.id === id ? { ...discount, discountPrice: price } : discount,
      ),
    })),
  initializeDiscounts: (menu) =>
    set({
      discounts: menu.map((item) => ({
        id: item.id,
        name: item.name,
        discountPrice: 0,
        isChecked: false,
      })),
    }),
  addDiscountEvent: () =>
    set((state) => ({
      discountEvents: [
        ...state.discountEvents,
        {
          id: state.discountEvents.length + 1,
          startDate: state.eventPeriod.startDate,
          endDate: state.eventPeriod.endDate,
          eventMessage: state.eventMessage,
          discounts: state.discounts,
        },
      ],
    })),
}))

export default DiscountEventStore
