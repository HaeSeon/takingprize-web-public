import {createContext, ReactNode, useContext, useState} from "react";
import {User} from "../models/user";

// @ts-ignore
const AuthContext = createContext<ReturnType<typeof useAuth>>(null)

function useAuth() {
  const [user, setUser] = useState<User | null>(null)

  return {
    user, setUser
  }
}


export function useAuthContext() {
  return useContext(AuthContext)
}

export function AuthContextProvider(args: {
  children: ReactNode
}) {
  const context = useAuth()
  return (
    <AuthContext.Provider value={context}>
      {args.children}
    </AuthContext.Provider>
  )
}
