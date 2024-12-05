import React, { useState, createContext } from "react";

export const initialState = { theme: "", favs: [] };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [favs, setFavs] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  return (
    <ContextGlobal.Provider value={{ favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;
