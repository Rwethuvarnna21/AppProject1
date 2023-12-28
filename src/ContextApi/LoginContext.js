
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const LoginContext = createContext();
export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState('null')
  const login = (userData) => {
    setUser(userData)
  }
  const logout = () => {
    setUser(null);


  }


  return (
    <LoginContext.Provider value={{ user, login, logout }}>
      {children}
    </LoginContext.Provider>

  )
}




