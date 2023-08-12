import React, { useState, useContext } from "react";
import Canvas from "../Canvas";
import Customizer from "../others/Customizer";
import { CartContext } from "../context/CartContext";
import Design from "../components/Design";

const Customise = () => {
  const { addToCart } = useContext(CartContext);
  const [value, setValue] = useState("night");
  const [selectedSize, setSelectedSize] = useState("S");
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const price = (value) => {
    switch (value) {
      case "night":
        return 12;
      case "city":
        return 14;
      case "studio":
        return 19;
      case "park":
        return 22;
      case "apartment":
        return 10;
    }
  };
  const tshirtNames = {
    night: "Midnight  Tee",
    city: "Metropolitan  Tee",
    apartment: "Urban Dwelling Tee",
    park: "Serene Parkside Tee",
    studio: "Artistic Studio  Tee",
  };
  const tshirtId = {
    night: 1000,
    city: 1001,
    apartment: 1002,
    park: 1003,
    studio: 1004,
  };
  const tshirtPrice = {
    night: 12,
    city: 14,
    apartment: 10,
    park: 22,
    studio: 19,
  };

  const data = [
    {
      attributes: {
        categories: {
          data: [
            {
              id: 1000,
              attributes: {
                title: "shirt",
              },
            },
          ],
        },
        price: tshirtPrice[value],
        image:
          "https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_640.png",
        title: tshirtNames[value],
      },
      id: tshirtId[value],
    },
  ];

  return (
    <div className="app transition-all ease-in ">
      <Design value={value} setValue={setValue} />
      <Customizer value={value} />

      <Canvas value={value} />
      <div className="flex flex-col  items-end mr-20 md:mr-40 lg:mr-60 xl:mr-80 pb-10">
        <h1 className="text-xl xl:text-3xl font-semibold uppercase mb-8 ">
          {tshirtNames[value]}
        </h1>
        <div className="flex   gap-x-8">
          <div className="text-3xl font-semibold mb-4">${price(value)}</div>
          <button
            className="bg-black text-white h-[50px] text-lg font-semibold rounded-lg p-2 w-[170px] xl:w-[300px] mt-[-6px]"
            onClick={() => addToCart(data, tshirtId[value])}
          >
            Add to Cart
          </button>
        </div>
        <div className="mt-10 flex md:gap-4 gap-2 rounded-lg items-center space-x-4">
          <button
            className={`px-4 py-2 rounded ${
              selectedSize === "S"
                ? "bg-black text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => handleSizeChange("S")}
          >
            S
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedSize === "M"
                ? "bg-black text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => handleSizeChange("M")}
          >
            M
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedSize === "L"
                ? "bg-black text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => handleSizeChange("L")}
          >
            L
          </button>
          <button
            className={`px-4 py-2 rounded ${
              selectedSize === "XL"
                ? "bg-black text-white"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => handleSizeChange("XL")}
          >
            XL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customise;
