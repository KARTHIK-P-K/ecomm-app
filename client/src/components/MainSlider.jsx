import React from "react";
import main from "../images/main.gif";

const MainSlider = () => {
  return (
    <div className="bg-slate-200 relative h-full max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl ">
      <img src={main} className="w-full h-full object-cover" />
      <h1 className="text-white text-5xl font-bold z-10 absolute left-2 top-0">
        Customize your Clothes <br /> using AI
      </h1>
    </div>
  );
};

export default MainSlider;
