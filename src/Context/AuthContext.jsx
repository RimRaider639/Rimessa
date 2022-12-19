import { createContext } from "react";
import React from 'react'


export const AuthContext = createContext()

export default function AuthContextProvider({children}){
    const [isAuth, setIsAuth] = React.useState(false)
    const [userCred, setUserCred] = React.useState({})
    const login = (cred) => {
        setIsAuth(true)
        setUserCred(cred)
    }
    const logout = () => {
        setIsAuth(false)
    }
    return <AuthContext.Provider value={{isAuth, login, logout, userCred}}>
        {children}
    </AuthContext.Provider>
}