import { create } from 'zustand'

interface searchSlice {
  searchValue: string
  setSearchValue: (value: string) => void
}

export const SearchStore = create<searchSlice>((set) => ({
  searchValue: '',
  setSearchValue: (value) => set({ searchValue: value }),
}))
