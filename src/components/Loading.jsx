import React from "react";
import { ClimbingBoxLoader, DotLoader, HashLoader } from "react-spinners";
import logo from "/img/logo.png";
const Loading = () => {
  return (
    <div className="bg-[#ffbcbc] h-screen w-screen flex items-center justify-center flex-col gap-12">
      <img src={logo} className="w-44 rounded-full " alt="" />
      <div className="flex flex-col items-center text-blue-600  -translate-y-12">
        <h1 className="title-text text-stroke-sm text-9xl text-red-10 font-bold z-30  leading-[9rem]">
          $APU
        </h1>
        <span className="title-text text-stroke-sm text-3xl md:text-4xl text-white font-bold text-center md:text-left">
          APU APUSTAJA ON TRON
        </span>
      </div>
      <div className="-translate-y-10">
        <DotLoader color="#ff060a" size={80} />
      </div>
    </div>
  );
};

export default Loading;
