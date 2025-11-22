import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { ThemeContext } from "./context/ThemeContext";
const Navbar = () => {
  const { setDarkmode, darkmode } = useContext(ThemeContext);
  return (
    <div
      className={`${darkmode ? "text-white bg-black" : ""} flex justify-around`}
    >
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <button
        onClick={() => {
          setDarkmode(!darkmode);
        }}
      >
        Dark Mode:{darkmode ? "on" : "false"}
      </button>
    </div>
  );
};

export default Navbar;
