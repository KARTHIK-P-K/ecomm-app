import React, { useContext, useState } from "react";
import SearchForm from "./SearchForm";
import { FiMenu } from "react-icons/fi";
import { BiCart } from "react-icons/bi";
import CategoryNavMobile from "./CategoryNavMobile";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { CartContext } from "../context/CartContext";
import Dressup from "../images/dressup-logo.png";
import CartIcon from "../images/cartIcon.png";

const Navbar = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);

  return (
    <header className=" py-6  w-full top-0 z-40 relative xl:mb-[30px] ">
      <div className="container mx-auto">
        <div className="flex flex-row gap-4 justify-between lg:justify-around lg:items-center mb-4 xl:mb-0">
          <div
            className="text-3xl xl:hidden cursor-pointer"
            onClick={() => setCatNavMobile(true)}
          >
            <FiMenu />
          </div>
          <div
            className={`${
              catNavMobile ? "left-0" : "-left-full"
            } fixed w-full h-screen top-0 bottom-0 z-30 transition-all duration-200`}
          >
            <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
          </div>

          <Link to="/">
            <img
              className="w-[120px]  h-[50px] text-xl"
              src={Dressup}
              alt="logo"
            />
          </Link>

          <div className="hidden w-full xl:flex xl:max-w-[734px]  ">
            <SearchForm />
          </div>
          <div className="flex item-center gap-x-[10px]">
            {/* <div className="hidden xl:flex uppercase">
              Need Help ? Contact 0471 1234567
            </div> */}
            <div
              className="cursor-pointer relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <BiCart className="text-4xl bg-black text-white rounded-lg p-1" />
              {/* <img src={CartIcon} className="w-[150px] h-[120px]" /> */}
              <div className="bg-amber-500 text-black absolute w-[18px] h-[18px] rounded-full top-2 -right-2 text-[13px] flex justify-center items-center font-bold tracking-[-.1em] ">
                {itemsAmount}
              </div>
            </div>
            <div
              className={`${
                isOpen ? "right-0" : "-right-full"
              } bg-black shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] transition-all duration-300 overflow-y-auto`}
            >
              <Cart />
            </div>
          </div>
        </div>
        <div className="xl:hidden">
          <SearchForm />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
