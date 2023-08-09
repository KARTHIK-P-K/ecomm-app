import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import RelatedProducts from "../components/RelatedProducts";
import { CartContext } from "../context/CartContext";
import Ratings from "../components/Ratings";
import AddRatingForm from "../components/AddRatingForm";
import Stars from "../components/Stars";

const ProductDetails = () => {
  const [review, setReview] = useState(false);
  const [selectedSize, setSelectedSize] = useState("S"); // Set the default size
  const { addToCart } = useContext(CartContext);
  const [pic, setPic] = useState(1);
  const { id } = useParams();
  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`);

  const handleClick1 = () => {
    setPic(1);
  };
  const handleClick2 = () => {
    setPic(2);
  };

  if (data.length === 0) {
    return <div className="container mx-auto">Loading.....</div>;
  }
  const categoryTitle = data[0].attributes.categories.data[0].attributes.title;
  const imageUrl = `http://localhost:1337${data[0]?.attributes.image.data.attributes.url}`;

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };
  const handleClick = () => {
    setReview(!review);
  };
  const ratingsArray = data[0].attributes.ratings?.data;
  let avg = 5;
  if (ratingsArray && ratingsArray.length > 0) {
    let sum = 0;
    for (let i = 0; i < ratingsArray.length; i++) {
      sum += ratingsArray[i].attributes.ratingnumber;
    }
    avg = Math.round(sum / ratingsArray.length);
  }

  return (
    <div className="mb-16 pt-24 lg:pt-[30px] xl:pt-0 ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]  ">
          <div className="flex flex-row justify-center lg:flex-col gap-4">
            <img
              src={`http://localhost:1337${data[0]?.attributes.image.data.attributes.url}`}
              alt="img1"
              className="w-20 h-25 cursor-pointer max-w-[150px] max-h-[150px]"
              onClick={handleClick1}
            />
            <img
              src={`http://localhost:1337${data[0]?.attributes.img2.data.attributes.url}`}
              alt="img1"
              className="w-20 h-25 cursor-pointer max-w-[150px] max-h-[150px]"
              onClick={handleClick2}
            />
          </div>
          <div className=" flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center ">
            {pic === 1 ? (
              <img
                src={`http://localhost:1337${data[0]?.attributes.image.data.attributes.url}`}
                alt="loading..."
                className="w-full max-w-[65%] max-h-[540px]"
              />
            ) : (
              <img
                src={`http://localhost:1337${data[0]?.attributes.img2.data.attributes.url}`}
                alt="loading..."
                className="w-full max-w-[65%] max-h-[540px]"
              />
            )}
          </div>
          <div className="flex-1  xl:p-20 rounded-lg flex flex-col justify-center mb-16">
            <div className="uppercase xl:text-2xl text-lg text-amber-500 font-medium mb-2">
              {data[0].attributes.categories.data[0].attributes.title}
            </div>
            <h2 className="text-xl xl:text-3xl font-semibold uppercase mb-4">
              {data[0].attributes.title}
            </h2>
            <div className="flex gap-x-3">
              <Stars rating={avg} />
              <p>({ratingsArray.length} reviews)</p>
            </div>

            <p className="mt-4 mb-12 xl:text-lg">
              {data[0].attributes.description}
            </p>
            <div className="flex   gap-x-8">
              <div className="text-3xl font-semibold mb-4">
                ${data[0].attributes.price}
              </div>
              <button
                className="bg-black text-white h-[50px] text-lg font-semibold rounded-lg p-2 w-[300px] mt-[-6px]"
                onClick={() => addToCart(data, id)}
              >
                Add to Cart
              </button>
            </div>
            <div className="mt-10 flex gap-4  rounded-lg items-center space-x-4">
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
            <button
              onClick={handleClick}
              className="bg-amber-500 mt-10 text-black h-[40px] text-lg font-semibold rounded-lg p-2 w-[120px] "
            >
              Your Review
            </button>
            {review && <AddRatingForm productId={id} />}
          </div>
        </div>
        <Ratings data={data} productId={id} />
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  );
};

export default ProductDetails;
