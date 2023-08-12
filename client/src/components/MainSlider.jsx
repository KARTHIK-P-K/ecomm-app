import React from "react";
import main from "../images/main.gif";
import { Link } from "react-router-dom";

const MainSlider = () => {
  return (
    <div className="border-2 shadow-md rounded-lg h-full p-4 relative">
      {/* <img src={main} className="w-full h-full object-cover" /> */}
      <h1 className="text-amber-500 lg:text-6xl md:text-4xl text-3xl font-bold mb-10">
        Let's Design Dreams !
      </h1>
      <h1 className="text-black text-xl ">
        Design your exclusive shirt using our state-of-the-art
        <span className="font-bold"> AI 3D </span>
        customization tool. Let your creativity flow and express your unique
        style.
      </h1>
      <Link
        to="/customise"
        className=" p-2 z-10 absolute bottom-3 right-3 font-semibold text-xl bg-amber-300 text-black rounded-lg"
      >
        Customise
      </Link>
    </div>
  );
};

export default MainSlider;
