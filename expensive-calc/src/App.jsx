import React, { useState, useEffect, useMemo } from "react";

const heavyCalculation = (n) => {
  n = parseInt(n, 10);
  let result = 0;
  for (let i = 0; i < n * 1000000; i++) {
    result += i % 10;
  }
  return result;
};

const App = () => {
  const [value, setValue] = useState({ number: 0, text: "" });

  const result = useMemo(() => heavyCalculation(value.number), [value.number]);

  return (
    <div>
      <div>
        <input
          type="number"
          placeholder="Enter a number"
          value={value.number}
          onChange={(e) => setValue({ ...value, number: e.target.value })}
        />
        <span>Result: {result}</span>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter a text"
          value={value.text}
          onChange={(e) => setValue({ ...value, text: e.target.value })}
        />
        <span>Entered text: {value.text}</span>
      </div>
    </div>
  );
};

export default App;
