import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export interface LoginStateType{
    user: string
    membertype: string
    isLogined: boolean
    setUser: (user: string) => void
    setMembertype: (membertype: string)=> void
    setIsLogined: (isLogined: boolean) => void
}

export const LoginStore = create(persist<LoginStateType>((set)=>({
    user: "고서현",
    membertype: "",
    isLogined: false,
    setUser: (user) => set({user}),
    setMembertype: (membertype) => set({membertype}),
    setIsLogined: (isLogined) => set({isLogined})
}),
    {
        name: "LoginStore",
    }
));