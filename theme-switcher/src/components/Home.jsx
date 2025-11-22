import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
const Home = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);
  return <div className={`${darkmode ? "text-white bg-black" : ""}`}>Home</div>;
};

export default Home;
