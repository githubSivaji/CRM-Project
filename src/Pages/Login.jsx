import React, { useState } from 'react';
import login from "../assets/login_banner.jpg";
import logo from "../assets/logo.webp";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(""); // Correct usage of useState

  const loginUser = async (FormData) => {
    try {
      // Simulating user validation
      if (FormData.username === "sivaji" && FormData.password === "1234") {
        navigate("/lead");
      } else {
        setErrorMsg("Incorrect username or password");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row h-screen bg-gray-100">
        {/* Left Section */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 bg-white p-6 md:p-10 shadow-lg">
          <div className="mb-1">
            <img src={logo} alt="Skill Capital Logo" className="h-12 mx-auto" />
          </div>
          <div className="p-5">
            <form className="space-y-4" onSubmit={handleSubmit(loginUser)}>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">Username is required</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: true })}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-pink-400 focus:outline-none"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">Password is required</p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2 text-gray-600">Remember Me</span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
              >
                Login
              </button>
            </form>
            <p className="text-red-500">{errorMsg}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex w-full lg:w-1/2 flex-col justify-center p-6 md:p-10">
          <div className="text-center mb-6 md:mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
              Seamlessly manage all learner data.
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Centralize customer data effortlessly. Streamline communication,
              sales, and support for seamless growth.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={login} alt="Dashboard Illustration" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
