import { create } from 'zustand'

interface MapStore {
  lat: number
  lng: number
  filterCheck: boolean
  googleMap: google.maps.Map | null
  setLat: (value: number) => void
  setLng: (value: number) => void
  setGoogleMap: (map: google.maps.Map) => void
  setFilterCheck: () => void
}

export const mapStore = create<MapStore>((set) => ({
  markers: [],
  googleMap: null,
  lat: 37.496336,
  lng: 126.95733,
  filterCheck: false,
  setLat: (value) => set({ lat: value }),
  setLng: (value) => set({ lng: value }),
  setGoogleMap: (map) => set({ googleMap: map }),
  setFilterCheck: () => set((state) => ({ filterCheck: !state.filterCheck })),
}))
