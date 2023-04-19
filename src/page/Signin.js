import React from "react";
import Header from "../components/header/Header";
import { ReactComponent as MailIcon } from "../asset/icon/Mail-@.svg";
import { ReactComponent as LockIcon } from "../asset/icon/Lock.svg";
import LoginSocail from "../components/loginWithSocail/LoginSocail";
const Signin = () => {
  return (
    <>
      <Header />
      <form className="mx-auto w-[550px] my-2">
        <div className="flex items-center justify-center flex-col gap-3 text-grayScale mb-5">
          <h2 className="font-bold text-2xl">Sign In</h2>
          <span className="font-semibold ">
            Welcome back, you've been missed!
          </span>
        </div>
        <div className="p-10 rounded-2xl shadow-xl flex flex-col gap-y-5">
          <LoginSocail />
          <div className="flex items-center justify-between">
            <div className="h-[.5px] w-[45%] bg-grayScale"></div>
            <span>OR</span>
            <div className="h-[.5px] w-[45%] bg-grayScale"></div>
          </div>
          <div className="w-full border border-gray-200 p-3 rounded-lg flex items-center gap-x-3 font-semibold focus-within:border-bluePrimary">
            <MailIcon />
            <input
              className="outline-none w-full text-sm"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="w-full border border-gray-200 p-3 rounded-lg  flex items-center gap-x-3 font-semibold focus-within:border-bluePrimary">
            <LockIcon />
            <input
              className="outline-none w-full text-sm"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex justify-between items-center px-3">
            <div className="flex gap-x-2 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <span>Remember me</span>
            </div>
            <a href="/" className="text-bluePrimary">
              Forgot Password?
            </a>
          </div>
          <button className="w-full p-3 bg-bluePrimary rounded-xl font-semibold text-white">
            Sign In
          </button>
          <div className="flex justify-center items-center gap-x-5 font-semibold text-grayScale">
            <span>You haven't any account? </span>
            <a href="/signup" className="text-bluePrimary">
              Sign Up
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signin;
