import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useContext(AuthContext);
  return (
    <div className="flex justify-evenly">
      {!isLoggedIn ? (
        <>
          <button
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              navigate("/signup");
            }}
          >
            Signup
          </button>
        </>
      ) : (
        <>
          <span>Home</span> <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};

export default Navbar;
