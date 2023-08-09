import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Stars from "./Stars";

const Product = ({ product }) => {
  const ratingsArr = product.attributes.ratings.data;
  let sum = 0;
  let avg = 5;
  for (let i = 0; i < ratingsArr.length; i++) {
    sum += ratingsArr[i].attributes.ratingnumber;
  }
  avg = Math.round(sum / ratingsArr.length);

  return (
    <Link to={`/product/${product.id}`}>
      <div className="group flex border-2 shadow-lg bg-white rounded-lg items-center justify-center relative  pb-32 max-w-[300px]">
        {product.attributes.isNew && (
          <div className="absolute top-4 right-4 bg-amber-500 z-10 p-2 font-extrabold rounded-full">
            New
          </div>
        )}
        <div className=" w-full h-[300px] group-hover:scale-95 transition-all  relative ">
          <img
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
            className="w-full h-full   "
          />
          <h1 className="text-amber-500 uppercase text-sm font-bold mx-2">
            {product.attributes.categories.data[0].attributes.title}
          </h1>
          <div className="mx-2">
            <Stars rating={avg} />
          </div>

          <div className="flex mt-5 justify-between px-2 gap-6">
            <h1 className="text-lg ">{product.attributes.title}</h1>

            <p className="font-bold text-xl ">${product.attributes.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
