import React, { createContext } from "react";

export const ShopContext = createContext()

export const ShopProvider = ({ children }) => {
  const currency = '$'


  return (
    <ShopContext.Provider value={{ currency }}>
      {children}
    </ShopContext.Provider>
  )
}
