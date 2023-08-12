import React, { useContext } from "react";
import { IoClose, IoCartOutline } from "react-icons/io5";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const { setIsOpen, cart, total, clearCart } = useContext(CartContext);
  return (
    <div className="w-full h-full   text-white flex flex-col px-4 justify-between gap-y-4 ">
      <div className="">
        <div
          className="flex justify-start items-center text-4xl w-20 h-[98px] cursor-pointer "
          onClick={() => setIsOpen(false)}
        >
          <IoClose />
        </div>
        <div className="flex flex-col px-2 gap-y-12  flex-1 overflow-y-auto">
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="py-4">
        <div>
          {cart.length >= 1 && (
            <div className="px-2">
              <div className="flex justify-between text-2xl">
                <div>Total</div>
                <div>${total}</div>
              </div>
            </div>
          )}
        </div>
        <div>
          {cart.length >= 1 ? (
            <div className="flex flex-col md:flex-row  justify-between gap-x-4 mt-4 mb-32 gap-y-[20px]">
              <button
                onClick={clearCart}
                className="bg-amber-300 rounded-md p-2 md:text-2xl md:px-8 text-xl text-black  px-2 gap-x-2"
              >
                Clear cart
              </button>
              <button className="bg-amber-300 rounded-md p-2 md:text-2xl md:px-8 text-xl text-black  px-2 gap-x-2">
                Checkout
              </button>
            </div>
          ) : (
            <div className="h-full absolute top-0 left-0 right-0 flex justify-center items-center -z-10 text-white/30 flex-col  ">
              <div className="text-2xl">Your cart is empty</div>
              <div className="text-6xl">
                <IoCartOutline />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
