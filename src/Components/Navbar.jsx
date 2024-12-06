import React, { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { theme, setTheme } = useContext(ContextGlobal);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav
      className={`flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 ${
        theme === "light" ? "bg-white text-black" : "bg-black text-white"
      }`}
    >
      <ul className="flex items-center font-bold gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/" className="hover:text-yellow-500">
            DH ODONTO
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-500" : "hover:text-yellow-500"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-500" : "hover:text-yellow-500"
            }
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favs"
            className={({ isActive }) =>
              isActive ? "font-bold text-yellow-500" : "hover:text-yellow-500"
            }
          >
            Favs
          </NavLink>
        </li>
        <li>
          <button
            onClick={toggleTheme}
            className="hover:text-yellow-500 focus:outline-none"
          >
            {theme === "light" ? "Dark Mode" : "Light Mode"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
