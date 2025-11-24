import React from "react";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Signup = () => {
  const navigate = useNavigate();
  const { signup } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = ({ email, password }) => {
    signup(email, password);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", { required: true })}
        placeholder="Enter email"
        type="email"
      />

      <input
        {...register("password", {
          required: "password is required",
          minLength: { value: 8, message: "Minimum characters required is 8" },
        })}
        placeholder="Enter password"
        type="password"
      />
      {errors.password && <p>{errors.password.message}</p>}

      <input type="submit" />
    </form>
  );
};

export default Signup;
