import React, { useMemo, useState } from "react";

const App = () => {
  const [value, setValue] = useState({ number: 0, text: "" });
  return (
    <div>
      <input
        type="number"
        placeholder="Enter a number"
        value={value.number}
        onChange={(e) => setValue({ ...value, number: e.target.value })}
      />
      <span>Result: {value.number}</span>
      <input
        type="text"
        placeholder="Enter a text"
        value={value.text}
        onChange={(e) => setValue({ ...value, text: e.target.value })}
      />
      <span>Entered text: {value.text}</span>
    </div>
  );
};

export default App;
