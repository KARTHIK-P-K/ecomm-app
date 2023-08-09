import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Qty = ({ item }) => {
  const { handleInput, handleSelect } = useContext(CartContext);

  return (
    <div className="flex gap-x-6 items-center text-black">
      {item.amount < 10 ? (
        <select
          onChange={(e) => handleSelect(e, item.id)}
          value={item.amount}
          className="p-2 rounded-lg w-[100px] outline-none text-black text-sm "
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </select>
      ) : (
        <input
          onBlur={(e) => handleInput(e, item.id)}
          type="text"
          id={`input${item.id}`}
          // value={item.amount}
          className="text-black placeholder:text-black text-sm rounded-md p-4 outline-amber-300 w-[120px]"
          placeholder={item.amount}
        />
      )}
    </div>
  );
};

export default Qty;
