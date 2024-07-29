import { create } from 'zustand'

interface MapStore {
  lat: number
  lng: number
  markers: google.maps.marker.AdvancedMarkerElement[]
  googleMap: google.maps.Map
  setLat: (value: number) => void
  setLng: (value: number) => void
  setGoogleMap: (map: google.maps.Map) => void
  addMarker: (marker: google.maps.marker.AdvancedMarkerElement) => void
  clearMarker: () => void
}

export const mapStore = create<MapStore>((set) => ({
  markers: [],
  lat: 37.496336,
  lng: 126.95733,
  addMarker: (marker) =>
    set((state) => ({ markers: [...state.markers, marker] })),
  clearMarker: () => set({ markers: [] }),
  setLat: (value) => set({ lat: value }),
  setLng: (value) => set({ lng: value }),
  setGoogleMap: (map) => set({ googleMap: map }),
}))
