import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StudentInfo {
  studentName: string
  id: string
  isSchoolSet: boolean
  setIsSchoolSet: (school: boolean) => void
}

interface SchoolInfo {
  schoolName: string | null
  address: string | null
  setSchoonName: (schoolNamee: string) => void
  setAddress: (addresss: string) => void
}

export const schoolInfoStore = create(
  persist<SchoolInfo>(
    (set) => ({
      schoolName: null,
      address: null,
      setSchoonName: (schoolNamee) => set({ schoolName: schoolNamee }),
      setAddress: (addresss) => set({ address: addresss }),
    }),
    { name: 'schoolInfo' },
  ),
)

export const studentInfoStore = create(
  persist<StudentInfo>(
    (set) => ({
      studentName: '조용민',
      id: 'yongii',
      isSchoolSet: false,
      setIsSchoolSet: (school) => set({ isSchoolSet: school }),
    }),
    {
      name: 'isSchoolSet',
    },
  ),
)
