import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();

  // Where to redirect after signup
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data) {
        toast.success("Signup Successfully");
        navigate(from, { replace: true });
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
     <div className="flex h-screen items-center justify-center">
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-gray-800 rounded-md shadow-md relative">
      {/* Close / Back button */}
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        aria-label="Close Signup"
      >
        &times;
      </button>

      <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-4">
          <label
            htmlFor="fullname"
            className="block mb-2 text-gray-700 dark:text-gray-200"
          >
            Full Name
          </label>
          <input
            id="fullname"
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-500 dark:text-white dark:placeholder-gray-400"
            {...register("fullname", { required: "Full name is required" })}
          />
          {errors.fullname && (
            <p className="text-red-500 mt-1 text-sm">{errors.fullname.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-500 dark:text-white dark:placeholder-gray-400"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 mt-1 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-gray-700 dark:text-gray-200"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-500 dark:text-white dark:placeholder-gray-400"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500 mt-1 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </button>
      </form>

      <p className="mt-4 text-gray-700 dark:text-gray-300">
       Have account?{" "}
      <Link to="/"
      className="underline text-blue-500 cursor-pointer"
      onClick={() => document.getElementById("my_modal_3").showModel()}
      >Login</Link>{" "}
      <Login/>
      </p>
    </div>
    </div>
  );
}

export default Signup;
