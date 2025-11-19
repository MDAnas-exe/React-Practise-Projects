import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const App = () => {
  const [formValues, setFormValues] = useState({
    service: "",
    username: "",
    password: "",
  });
  const [infos, setInfos] = useState([]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const addCredentials = () => {
    setInfos([...infos, { ...formValues, id: uuidv4(), showPass: false }]);
  };
  const togglePassDisplay = (id) => {
    setInfos((prev) =>
      prev.map((info) =>
        info.id === id ? { ...info, showPass: !info.showPass } : info
      )
    );
  };

  return (
    <div>
      <div className="flex flex-col gap-2 m-1">
        <input
          type="text"
          name="service"
          placeholder="Enter service"
          className="border border-black w-1/4"
          onChange={handleChange}
          value={formValues.service}
        />
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          className="border border-black w-1/4"
          onChange={handleChange}
          value={formValues.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="border border-black w-1/4"
          onChange={handleChange}
          value={formValues.password}
        />
        <button className="border border-black w-1/4" onClick={addCredentials}>
          Add
        </button>
      </div>
      <div>
        {infos.map((info) => {
          return (
            <div key={info.id} id={info.id}>
              <p>Service: {info.service}</p>
              <p>Username: {info.username}</p>
              <div className="flex transition-all duration-300">
                <input
                  type={info.showPass ? "text" : "password"}
                  value={info.password}
                  disabled
                  className="disabled:bg-white "
                />
                {info.showPass ? (
                  <FaRegEyeSlash
                    className="cursor-pointer "
                    onClick={() => {
                      togglePassDisplay(info.id);
                    }}
                  />
                ) : (
                  <FaRegEye
                    className="cursor-pointer "
                    onClick={() => {
                      togglePassDisplay(info.id);
                    }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
