import React from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import { BiSolidTShirt } from "react-icons/bi";
import { FaRedhat } from "react-icons/fa";
import { GiConverseShoe, GiArmoredPants } from "react-icons/gi";

const CategoryNav = () => {
  const icons = [
    <BiSolidTShirt />,
    <GiArmoredPants />,

    <FaRedhat />,
    <GiConverseShoe />,
  ];
  let i = 0;

  const { data } = useFetch("/categories");
  return (
    <aside className="hidden xl:flex ">
      {/* <div className="  rounded-lg flex flex-col w-[286px] h-[500px]  overflow-hidden "> */}
      <div className="category rounded-lg">
        <div className="bg-black text-lg text-white flex justify-center items-center uppercase font-semibold p-2 ">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6 ">
          {data?.map((category) => {
            return (
              <div className="flex gap-4 items-center box " key={i}>
                {icons[i++]}
                <Link
                  key={category.id}
                  className="uppercase cursor-pointer text-lg "
                  to={`/products/${category.id}`}
                >
                  {category.attributes.title}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default CategoryNav;
