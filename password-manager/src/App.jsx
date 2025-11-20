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
    setFormValues({
      service: "",
      username: "",
      password: "",
    });
  };
  const togglePassDisplay = (id) => {
    setInfos((prev) =>
      prev.map((info) =>
        info.id === id ? { ...info, showPass: !info.showPass } : info
      )
    );
  };
  const deletePassword = (id) => {
    setInfos((prev) => prev.filter((info) => info.id !== id));
  };

  return (
    <div>
      <div className="flex flex-col gap-2 m-1">
        <input
          type="text"
          name="service"
          placeholder="Enter service"
          className="border border-black w-60"
          onChange={handleChange}
          value={formValues.service}
        />
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          className="border border-black w-60"
          onChange={handleChange}
          value={formValues.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          className="border border-black w-60"
          onChange={handleChange}
          value={formValues.password}
        />
        <button
          className="border border-black w-60 disabled:bg-slate-200 "
          onClick={addCredentials}
          disabled={
            !formValues.password || !formValues.username || !formValues.service
          }
          title={
            !formValues.password || !formValues.username || !formValues.service
              ? "Cannot add empty field"
              : ""
          }
        >
          Add
        </button>
      </div>
      <div>
        {infos.map((info) => {
          return (
            <div key={info.id} id={info.id}>
              <p className="border border-black w-60">
                Service: {info.service}
              </p>
              <p className=" border border-black w-60">
                Username: {info.username}
              </p>
              <div className="flex border border-black w-60 items-center justify-between">
                <input
                  type={info.showPass ? "text" : "password"}
                  value={info.password}
                  disabled
                  className="disabled:bg-white "
                />
                <div className="relative bottom-2">
                  <FaRegEye
                    className={`absolute right-2  cursor-pointer transition-opacity duration-300 ${
                      info.showPass ? "opacity-0" : "opacity-100"
                    }`}
                    onClick={() => togglePassDisplay(info.id)}
                  />
                  <FaRegEyeSlash
                    className={`absolute right-2  cursor-pointer transition-opacity duration-300 ${
                      info.showPass ? "opacity-100" : "opacity-0"
                    }`}
                    onClick={() => togglePassDisplay(info.id)}
                  />
                </div>
              </div>
              <button
                onClick={() => {
                  deletePassword(info.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
