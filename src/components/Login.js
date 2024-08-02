import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignInForm(!isSignInForm);
  };

  console.log("is ", isSignInForm);

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="h-[100vh] w-full object-cover"
          src={`${process.env.PUBLIC_URL}/img-3.jpg`}
          alt="Login Illustration"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
        <form
          className="p-10 flex flex-col justify-center bg-[#000000cc] text-white h-[34rem] w-[24rem] rounded-lg"
          method=""
        >
          <h1 className="text-3xl font-bold my-4">Sign In</h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-3 p-3 bg-[#3b3b3ba4] placeholder-zinc-400  border rounded-sm"
            />
          )}

          <input
            type="text"
            placeholder="Email or phone number"
            className="my-3 p-3 bg-[#3b3b3ba4] placeholder-zinc-400  border rounded-sm"
          />
          <input
            type="password"
            placeholder="Enter password"
            className="my-3 p-3 bg-[#3b3b3ba4]  placeholder-zinc-400 border rounded-sm"
          />
          <button className="bg-red-800 p-2 rounded-lg my-6 opacity-100">
            SignIn
          </button>

          <span className="font-medium">
            {isSignInForm ? "New to Cinemagic? " : "Already a member? "}
            <button
              className="hover:text-red-900 text-[1.2rem]"
              onClick={toggleForm}
            >
              {isSignInForm ? "Sign up now" : "Sign In now "}
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
