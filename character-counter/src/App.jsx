import React, { useState, useRef } from "react";

const App = () => {
  const [value, setvalue] = useState("");

  return (
    <div>
      <div
        className={`fixed left-1/2 -translate-x-1/2 transition-all duration-300 ${
          value.length < 15 ? "-top-5" : "top-0"
        }`}
      >
        Max limit is 15 characters
      </div>
      <input
        className={`transition duration-300 border border-black ${
          value.length > 15 ? "text-red-600" : ""
        }`}
        type="text"
        value={value}
        onChange={(e) => {
          if (e.target.value.length <= 15) setvalue(e.target.value);
        }}
      />
      <fieldset
        className={`transition duration-300 border p-1 inline border-black ${
          value.length > 15 ? "text-red-600" : ""
        }`}
      >
        <legend>Character Count</legend>
        {value.length}
      </fieldset>
      <fieldset
        className={`transition duration-300 border p-1 inline border-black ${
          value.length > 15 ? "text-red-600" : ""
        }`}
      >
        <legend>Word Count</legend>
        {value.trim() === "" ? 0 : value.trim().split(/\s+/).length}
      </fieldset>
      <div
        className="bg-red-600 transition-all duration-300"
        style={{ width: `${(value.length / 15) * 100}%` }}
      >
        &nbsp;
      </div>
    </div>
  );
};

export default App;
