import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 300);
    return () => clearTimeout(timeout);
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      navigate(`/search?query=${searchTerm}`);
      document.getElementById("search").value = "";
      //document.querySelectorAll("input").value = " ";
      console.log(document.getElementById("search").value);
      setSearchTerm("");
    } else {
      setIsAnimating(true);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-full relative border-2 rounded-lg"
    >
      <input
        type="text"
        id="search"
        placeholder="Search for a Product..."
        className={`${
          isAnimating ? "animate-bounce" : "animate-none"
        } w-full  p-2`}
        onChange={handleChange}
      />
      <button className="absolute top-2 right-1 rounded-bl-none rounded-tl-none">
        <FiSearch className="text-xl" />
      </button>
    </form>
  );
};

export default SearchForm;
