import React, { useState, createContext, useEffect } from "react";

export const initialState = { favs: [], theme: "light" };

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [favs, setFavs] = useState(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favorites"));
    return savedFavs || [];
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favs));
  }, [favs]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className =
      theme === "dark" ? "bg-dark text-white" : "bg-light text-black";
  }, [theme]);

  return (
    <ContextGlobal.Provider value={{ favs, setFavs, theme, setTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextGlobal;
