import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface SchoolInfo {
  schoolName: string | null
  address: string | null
  setSchoolName: (schoolName: string) => void
  setAddress: (address: string) => void
}

export const schoolInfoStore = create(
  persist<SchoolInfo>(
    (set) => ({
      schoolName: null,
      address: null,
      setSchoolName: (schoolName) => set({ schoolName: schoolName }),
      setAddress: (address) => set({ address: address }),
    }),
    { name: 'schoolInfo' },
  ),
)
