import React, { useState } from "react";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import "./index.css";
const App = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isDisabled, setDisabled] = useState(false);
  return (
    <>
      <div
        className={`transition duration-1000 ${
          darkMode ? "bg-black text-white" : ""
        }`}
      >
        <button
          disabled={isDisabled}
          onClick={() => {
            setDarkMode(!darkMode);
            setDisabled(true);

            setTimeout(() => {
              setDisabled(false);
            }, 1000);
          }}
          className="flex justify-center w-full cursor-pointer"
        >
          {darkMode ? (
            <FaToggleOn className="w-10 h-10" />
          ) : (
            <FaToggleOff className="w-10 h-10" />
          )}
        </button>
        <div className="flex items-center justify-center flex-col">
          <div className="w-full flex justify-center gap-3">
            <button
              className={` ${
                darkMode ? "border-white" : "border-black"
              }  border`}
              onClick={() => {
                if (count > 0) setCount(count - 1);
              }}
            >
              -
            </button>
            <span>{count}</span>
            <button
              className={` ${
                darkMode ? "border-white" : "border-black"
              }  border`}
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <button
            className={` ${darkMode ? "border-white" : "border-black"}  border`}
            onClick={() => {
              setCount(0);
            }}
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
