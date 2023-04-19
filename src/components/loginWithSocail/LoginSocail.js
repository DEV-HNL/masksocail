import React from "react";
import { ReactComponent as GoogleLogo } from "../../asset/icon/Google.svg";
import { ReactComponent as FacebookLogo } from "../../asset/icon/Faceook.svg";
const LoginSocail = () => {
  return (
    <>
      <div className="flex gap-x-5 justify-between items-center">
        <button className="w-[240px] bg-gray-200 py-2 rounded-lg font-semibold flex gap-x-3 p-3 items-center justify-center ">
          <GoogleLogo />
          Sign in width Google
        </button>
        <button className="w-[240px] bg-gray-200 py-2 rounded-lg font-semibold flex gap-x-3 p-3 items-center justify-center">
          <FacebookLogo />
          Sign in width Facebook
        </button>
      </div>
    </>
  );
};

export default LoginSocail;
