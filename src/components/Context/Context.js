import React, { createContext, useContext, useState } from "react";
const AppProvider = createContext();
export const Context = ({ children }) => {
  const [query, setQuery] = useState("");
  return (
    <AppProvider.Provider value={{ query, setQuery }}>
      {children}
    </AppProvider.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppProvider);
};
