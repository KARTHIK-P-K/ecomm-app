import React from "react";
import shirt from "../assets/shirt.png";
import boot from "../assets/boot.png";
import pant from "../assets/trousers.png";
import hat from "../assets/hat.png";
import shirt2 from "../assets/t-shirt.png";
import shirt3 from "../assets/tshirt.png";
import shirt4 from "../assets/tshirt3.png";
import shirt5 from "../assets/tshirt4.png";

const Design = ({ value, setValue }) => {
  return (
    <div className=" flex justify-center gap-2">
      <button onClick={() => setValue("night")}>
        <img
          src={shirt}
          alt="shirt"
          className="md:w-20 md:h-16 w-14 h-12  rounded-lg glassmorphism cursor-pointer  "
        />
      </button>
      <button
        onClick={() => {
          console.log("hi");
          setValue("studio");
        }}
      >
        <img
          src={shirt2}
          alt="pant"
          className="md:w-20 md:h-16 w-14 h-12  rounded-lg glassmorphism cursor-pointer"
        />
      </button>
      <button onClick={() => setValue("city")}>
        <img
          src={shirt3}
          alt="boot"
          className="md:w-20 md:h-16 w-14 h-12  rounded-lg glassmorphism cursor-pointer"
        />
      </button>

      <button onClick={() => setValue("park")}>
        <img
          src={shirt4}
          alt="hat"
          className="md:w-20 md:h-16 w-14 h-12  rounded-lg glassmorphism cursor-pointer"
        />
      </button>

      <button onClick={() => setValue("apartment")}>
        <img
          src={shirt5}
          alt="hat"
          className="md:w-20 md:h-16 w-14 h-12  rounded-lg glassmorphism cursor-pointer"
        />
      </button>
    </div>
  );
};

export default Design;
