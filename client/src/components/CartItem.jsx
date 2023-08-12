import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import Qty from "./Qty";
import { CartContext } from "../context/CartContext";
import shirt2 from "../assets/t-shirt.png";
import shirt3 from "../assets/tshirt.png";
import shirt4 from "../assets/tshirt3.png";
import shirt5 from "../assets/tshirt4.png";
import shirt from "../assets/shirt.png";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  const linkTo = item.id < 1000 ? `/product/${item.id}` : `/customise`;
  const shirtImages = {
    1000: shirt,
    1001: shirt3,
    1002: shirt5,
    1003: shirt4,
    1004: shirt2,
  };
  return (
    <div className="flex gap-x-8">
      <Link to={linkTo} className="">
        {item.id < 1000 ? (
          <img
            src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
            className="w-[90px] h-[100px]"
          />
        ) : (
          <img src={shirtImages[item.id]} className="w-[90px] h-[100px]" />
        )}
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3 justify-between">
          <Link to={linkTo}>{item.attributes.title}</Link>
          <div
            onClick={() => removeItem(item.id)}
            className="cursor-pointer text-[24px]  hover:text-amber-900 transition-all "
          >
            <BsFillTrashFill />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className="text-amber-300 text-xl">
            ${item.attributes.price * item.amount}
          </div>
        </div>
        <div>
          <span className="text-amber-300">
            ${item.attributes.price} per piece
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
