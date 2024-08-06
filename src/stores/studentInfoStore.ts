import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StudentInfo {
  studentName: string
  id: string
  isSchoolSet: boolean
  setIsSchoolSet: (school: boolean) => void
}

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
