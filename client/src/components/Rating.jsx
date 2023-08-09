import React, { useContext } from "react";
import Stars from "./Stars.jsx";
import { BsFillTrashFill } from "react-icons/bs";
import { makeRequest } from "../makeRequest";
import { CartContext } from "../context/CartContext.jsx";

const Rating = ({ rate }) => {
  const { ratingState, setRatingState } = useContext(CartContext);
  const handleClick = async () => {
    try {
      const result = await makeRequest.delete(`/ratings/${rate.id}`);
      console.log("Rating deleted:", result);
      setRatingState(!ratingState);
    } catch (error) {
      console.error("Error deleting rating:", error.response.data);
    }
  };
  return (
    <div>
      <div className="border-2 rounded-lg h-[300px] md:w-[400px] w-[240px] p-4 mt-4 overflow-scroll">
        <p>{rate.attributes.review}</p>
        <div className="flex justify-center mt-4">
          <Stars rating={rate.attributes.ratingnumber} />
        </div>
        <p className="text-right mt-4">
          --- {rate.attributes.name ? rate.attributes.name : "Unknown"}
        </p>
        {rate.attributes.name === "You" && (
          <div className="flex justify-center items-end cursor-pointer   ">
            <BsFillTrashFill onClick={handleClick} className="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Rating;
