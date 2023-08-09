import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";
import Qty from "./Qty";
import { CartContext } from "../context/CartContext";

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="flex gap-x-8">
      <Link to={`/product/${item.id}`} className="">
        <img
          src={`http://localhost:1337${item.attributes.image.data.attributes.url}`}
          className="w-[90px] h-[100px]"
        />
      </Link>
      <div className="flex-1">
        <div className="flex gap-x-4 mb-3 justify-between">
          <Link to={`/product/${item.id}`}>{item.attributes.title}</Link>
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
