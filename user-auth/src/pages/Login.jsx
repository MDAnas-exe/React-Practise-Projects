import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => {
    if (login(email, password)) navigate("/");
    else navigate("/signup");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
        placeholder="Enter email"
        type="email"
      />

      <input
        {...register("password", { required: "password is required" })}
        placeholder="Enter password"
        type="password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" className="bg-red-600 w-full" />
    </form>
  );
};

export default Login;
