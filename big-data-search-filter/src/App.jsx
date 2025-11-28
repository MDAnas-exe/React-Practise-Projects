import React, { useState, memo } from "react";
import { Biglist } from "./data/Biglist";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const originalList = Biglist.map((name) => ({
    id: uuidv4(),
    name,
  }));

  const [value, setValue] = useState("");
  const [filteredList, setFilteredList] = useState(originalList);

  const filterList = (value) => {
    const filtered = originalList.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredList(filtered);
  };

  const List = memo(({ name }) => <li className="w-32">{name}</li>);

  return (
    <div>
      <input
        type="search"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          filterList(e.target.value);
        }}
        className="border border-black outline-none"
      />

      <ul className="flex flex-wrap">
        {filteredList.map((item) => (
          <List name={item.name} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default App;
