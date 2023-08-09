import React from "react";

const StarRating = ({ rating }) => {
  const filledStars = Math.min(Math.max(rating, 0), 5);

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <svg
          key={index}
          className={`h-6 w-6 fill-current ${
            index <= filledStars ? "text-yellow-500" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M10 1L12.39 6.69L18.19 7.79L13.78 11.76L14.98 17.31L10 14.47L5.02 17.31L6.22 11.76L1.81 7.79L7.61 6.69L10 1z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
