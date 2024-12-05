import React, { useState, createContext, useEffect } from "react";

export const initialState = { favs: [] };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [favs, setFavs] = useState(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favorites"));
    if (!savedFavs) {
      return [];
    }
    return savedFavs;
  });

  useEffect(() => {
    if (favs.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favs));
    }
  }, [favs]);

  return (
    <ContextGlobal.Provider value={{ favs, setFavs }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;
