import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSigninForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSigninForm);
  };

  return (
    <div className="w-100">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="image"
        />
      </div>
      <form className="absolute p-12 w-3/12 align-middle mx-auto left-0 right-0 my-40 bg-black text-white rounded-md">
        <h1 className="text-3xl font-bold py-4">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSigninForm && (
            <input
            type="text"
            placeholder=" Full Name"
            className="p-4 m-2 w-full bg-transparent border-solid border-2 border-zinc-400"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 m-2 w-full bg-transparent border-solid border-2 border-zinc-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 w-full bg-transparent border-solid border-2 border-zinc-400"
        />
        <button className="p-2 m-2 bg-red-600 w-full">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSigninForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
