import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const AuthContext = createContext()

export default function AuthProvider({children}) {

    const [user, setUser] = useState(null)

  return (
      
      <AuthContext.Provider value={{user, setUser}} >{children}</AuthContext.Provider>
  )
}

export function useAuth(){
    return useContext(AuthContext)
}