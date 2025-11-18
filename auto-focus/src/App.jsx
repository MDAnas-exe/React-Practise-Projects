import React, { useRef, useEffect, useState } from "react";

const App = () => {
  const focusRef = useRef();
  const [value, setvalue] = useState("");
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  const handleInput = (e) => {
    setvalue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={value} disabled />
      <input
        type="text"
        onChange={handleInput}
        ref={focusRef}
        className="border border-black"
        value={value}
      />
      <button
        onClick={() => {
          focusRef.current.focus();
        }}
      >
        Focus
      </button>
      <button
        onClick={() => {
          setvalue("");
        }}
        value={value}
      >
        clear
      </button>
    </div>
  );
};

export default App;
