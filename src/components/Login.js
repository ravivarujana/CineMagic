import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validateUser";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const handleUserInfo = (e) => {
    let message = isSignInForm
      ? checkValidate("signin", email.current.value, password.current.value)
      : checkValidate(
          "signup",
          email.current.value,
          password.current.value,
          fullName.current.value
        );
    setErrorMessage(message);

    if (message) return;

    //create the user
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          console.log("user created ---- ", user);
        })
        .catch((error) => {
          console.log("asdas");
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode}`);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrorMessage(`${errorCode}===${errorMessage}`);
          setErrorMessage(
            errorMessage.includes("invalid") && "* Invalid Credentials"
          );
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const toggleForm = () => {
    email.current.value = "";
    password.current.value = "";
    setIsSignInForm(!isSignInForm);
    setErrorMessage("");
  };

  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="h-[100vh] w-full object-cover"
          src={`${process.env.PUBLIC_URL}/img-3.jpg`}
          alt="img-3"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center ">
        <form
          className="p-10 flex flex-col justify-center bg-[#000000cc] text-white h-[34rem] w-[24rem] rounded-lg"
          method=""
          onSubmit={handleSubmit}
        >
          <h1 className="text-3xl font-bold my-4">Sign In</h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              placeholder="Full Name"
              className="my-3 p-3 bg-[#3b3b3ba4] placeholder-zinc-400  border rounded-sm"
            />
          )}

          <input
            name="email"
            ref={email} //this will help us get reference from the input box in the form of object
            type="text"
            placeholder="Email or phone number"
            className="my-3 p-3 bg-[#3b3b3ba4] placeholder-zinc-400  border rounded-sm"
          />
          <input
            name="password"
            ref={password} //this will help us get reference from the input box
            // value={userInfo.password}
            type="password"
            placeholder="Enter password"
            className="my-3 p-3 bg-[#3b3b3ba4]  placeholder-zinc-400 border rounded-sm"
          />

          <span className="text-red-600 font-bold pt-2">{errorMessage}</span>

          <button
            className="bg-red-800 p-2 rounded-lg my-6 opacity-100"
            onClick={handleUserInfo}
          >
            SignIn
          </button>

          <span className="font-medium">
            {isSignInForm ? "New to Cinemagic? " : "Already a member? "}
            <span
              className="hover:text-red-900 text-[1.2rem] cursor-pointer"
              onClick={toggleForm}
            >
              {isSignInForm ? "Sign up now" : "Sign In now "}
            </span>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
