import { createContext } from 'react'


export interface UserType {
    email: string;
    name: string;
    uid: string;
}

export interface UserContextType {
    user: UserType;
    setUser: (newUser: UserType) => void
}

export const UserContext = createContext<UserContextType | null>({
    user: {
        email: "",
        name: "",
        uid: ""
    },
    setUser: function (newUser) {
        this.user = newUser
    },
})
