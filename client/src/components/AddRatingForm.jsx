import React, { useContext, useState } from "react";
import { makeRequest } from "../makeRequest";
import { CartContext } from "../context/CartContext";

const AddRatingForm = ({ productId }) => {
  const { ratingState, setRatingState } = useContext(CartContext);
  const [ratingValue, setRatingValue] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);

      const newRating = {
        data: {
          review: reviewText,
          ratingnumber: ratingValue,
          products: productId,
          name: "You",
        },
      };

      const response = await makeRequest.post("/ratings", newRating);
      console.log("New rating created:", response.data);
      setRatingState(!ratingState);

      setRatingValue(0);
      setReviewText("");
    } catch (error) {
      console.error("Error creating rating:", error.response.data);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-2 p-4 mt-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 bg-white shadow rounded"
      >
        <label className="block mb-2">
          Rating(1-5):
          <input
            type="number"
            min="1"
            max="5"
            value={ratingValue}
            onChange={(e) => setRatingValue(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          />
        </label>
        <br />
        <label>
          Review:
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full h-32 resize-none"
          />
        </label>
        <br />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </button>
      </form>
    </div>
  );
};

export default AddRatingForm;
