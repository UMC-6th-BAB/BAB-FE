import { create } from 'zustand'

interface MapStore {
  lat: number
  lng: number
  filterCheck: boolean
  markers: google.maps.marker.AdvancedMarkerElement[]
  googleMap: google.maps.Map | null
  setLat: (value: number) => void
  setLng: (value: number) => void
  setFilterCheck: () => void
  setGoogleMap: (map: google.maps.Map) => void
  addMarker: (marker: google.maps.marker.AdvancedMarkerElement) => void
  clearMarker: () => void
}

export const mapStore = create<MapStore>((set) => ({
  markers: [],
  googleMap: null,
  lat: 37.496336,
  lng: 126.95733,
  filterCheck: false,
  addMarker: (marker) =>
    set((state) => ({ markers: [...state.markers, marker] })),
  clearMarker: () => set({ markers: [] }),
  setLat: (value) => set({ lat: value }),
  setLng: (value) => set({ lng: value }),
  setFilterCheck: () => set((state) => ({ filterCheck: !state.filterCheck })),
  setGoogleMap: (map) => set({ googleMap: map }),
}))
