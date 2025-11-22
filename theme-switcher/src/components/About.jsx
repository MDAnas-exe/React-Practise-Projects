import React, { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
const About = () => {
  const { darkmode, setDarkmode } = useContext(ThemeContext);
  return (
    <div className={`${darkmode ? "text-white bg-black" : ""}`}>About</div>
  );
};

export default About;
