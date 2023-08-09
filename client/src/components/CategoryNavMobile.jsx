import React from "react";
import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CategoryNavMobile = ({ setCatNavMobile }) => {
  const { data } = useFetch("/categories");
  return (
    <div className="w-full h-full p-10  bg-black text-white p">
      <div
        className="flex justify-end mb-8 cursor-pointer"
        onClick={() => setCatNavMobile(false)}
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8 ">
        {data.map((category) => (
          <Link
            className="uppercase"
            to={`/products/${category.id}`}
            key={category.id}
          >
            {category.attributes.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryNavMobile;
