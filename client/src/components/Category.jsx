import React from "react";
import shirt from "../assets/shirt.png";
import boot from "../assets/boot.png";
import pant from "../assets/trousers.png";
import hat from "../assets/hat.png";

const Category = ({ index, setIndex }) => {
  return (
    <div className="flex justify-center gap-6 mt-8 z-20">
      <button onClick={() => setIndex(1)}>
        <img
          src={shirt}
          alt="shirt"
          className="w-18 h-16 rounded-lg glassmorphism cursor-pointer z-20 "
        />
      </button>
      <button onClick={() => setIndex(2)}>
        <img
          src={pant}
          alt="pant"
          className="w-18 h-16 rounded-lg glassmorphism cursor-pointer"
        />
      </button>
      <button onClick={() => setIndex(3)}>
        <img
          src={boot}
          alt="boot"
          className="w-18 h-16 rounded-lg glassmorphism cursor-pointer"
        />
      </button>
      <button onClick={() => setIndex(4)}>
        <img
          src={hat}
          alt="hat"
          className="w-18 h-16 rounded-lg glassmorphism cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Category;
