import React from "react";
import logo from "../../asset/image/Logo.png";

const Header = () => {
  return (
    <header className="px-8 py-3">
      <div className="flex gap-x-2 items-center ">
        <img src={logo} alt="Logo" className="w-10 object-cover" />
        <h2 className="font-bold text-2xl text-grayScale">Mask</h2>
      </div>
    </header>
  );
};

export default Header;
