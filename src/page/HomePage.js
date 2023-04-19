import React from "react";
import bgLight from "../asset/image/thumbLight.png";
import Header from "../components/header/Header";
const HomePage = () => {
  return (
    <div className="relative w-screen h-screen">
      <img
        src={bgLight}
        alt="bg"
        className="absolute -z-10 w-full object-cover h-full"
      />
      <Header />
      <div className="px-8 py-12 leading-10">
        <span className="text-5xl font-bold text-dark1">
          Mask <br /> Socail Media <br /> Web App
        </span>
      </div>
      <button className="mx-8 my-10 p-3 bg-bluePrimary text-white rounded-lg font-semibold px-5 hover:opacity-70 transition-all ease-linear shadow-md">
        Sign Up Now!
      </button>
    </div>
  );
};

export default HomePage;
