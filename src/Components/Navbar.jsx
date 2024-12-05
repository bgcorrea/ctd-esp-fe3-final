import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  let activeStyle = {
    fontWeight: "bold",
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white">
      <ul className="flex items-center font-bold gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">DH ODONTO</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/favs"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Favs
          </NavLink>
        </li>
        <li>
          <button>Change theme</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
