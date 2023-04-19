import React from "react";
import Header from "../components/header/Header";
import LoginSocail from "../components/loginWithSocail/LoginSocail";

import { ReactComponent as MailIcon } from "../asset/icon/Mail-@.svg";
import { ReactComponent as LockIcon } from "../asset/icon/Lock.svg";
import { ReactComponent as SimleIcon } from "../asset/icon/Smile.svg";
import { ReactComponent as EyeOpenIcon } from "../asset/icon/Eye.svg";
import { ReactComponent as EyeCloseIcon } from "../asset/icon/Eye Off.svg";
import { ReactComponent as MaleIcon } from "../asset/icon/male.svg";
import { ReactComponent as FemaleIcon } from "../asset/icon/Female.svg";
import { ReactComponent as DateICon } from "../asset/icon/Calendar.svg";
const Signup = () => {
  return (
    <>
      <Header />
      <form className="mx-auto w-[550px]">
        <div className="flex items-center justify-center flex-col gap-3 text-grayScale mb-5">
          <h2 className="font-bold text-2xl">Getting Started</h2>
          <span className="font-semibold ">
            Create an account to continue and connect with the people.
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
            <SimleIcon />
            <input
              className="outline-none w-full text-sm"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter your FullName"
            />
          </div>
          <div className="flex gap-x-3 w-full">
            <div className="w-full border border-gray-200 p-3 rounded-lg  flex items-center gap-x-3 font-semibold focus-within:border-bluePrimary">
              <LockIcon />
              <input
                className="outline-none w-full text-sm"
                type="password"
                name="rePassword"
                id="rePpassword"
                placeholder="Enter your Re - password"
              />
              <EyeCloseIcon />
            </div>
            <div className="w-full border border-gray-200 p-3 rounded-lg  flex items-center gap-x-3 font-semibold focus-within:border-bluePrimary">
              <LockIcon />
              <input
                className="outline-none w-full text-sm"
                type="password"
                name="password"
                id="password"
                placeholder="Create your password"
              />
              <EyeCloseIcon />
            </div>
          </div>
          <div className="w-full focus-within:border-bluePrimary justify-between text-sm flex gap-x-3 text-grayScale-60">
            <div className="w-full border border-gray-200 p-3 rounded-lg  flex items-center gap-x-3 font-semibold">
              <DateICon />
              <input type="date" name="date" id="date" className="hidden" />
              <label htmlFor="date">Date of birth</label>
            </div>
            <div className="flex w-full justify-around border border-gray-200 p-3 rounded-lg  items-center gap-x-3 font-semibold">
              <MaleIcon />
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="sex"
                  id="male"
                  value="male"
                  className="text-base w-4 h-4"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="flex items-center gap-x-2">
                <input
                  type="radio"
                  name="sex"
                  id="female"
                  value="male"
                  className="text-base w-4 h-4"
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <button className="w-full p-3 bg-bluePrimary rounded-xl font-semibold text-white">
            Sign Up
          </button>
          <div className="flex justify-center items-center gap-x-5 font-semibold text-grayScale">
            <span>Already have an account? </span>
            <a href="/signin" className="text-bluePrimary">
              Sign In
            </a>
          </div>
        </div>
      </form>
    </>
  );
};

export default Signup;
