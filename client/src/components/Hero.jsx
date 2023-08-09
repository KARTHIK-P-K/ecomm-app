import React from "react";
import CategoryNav from "./CategoryNav";
import MainSlider from "./MainSlider";
import pant from "../images/pant.jpg";
import shirt from "../images/shirt.jpg";
import Sample from "./Sample";

const Hero = () => {
  return (
    <section className="mb-[30px] pt-12 lg:pt-0 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-x-[30px] gap-y-[30px]">
          <div className="">
            <CategoryNav />
            {/* <Sample /> */}
          </div>
          <div className="w-full h-[500px] max-w-lg lg:max-w-[734px] mx-auto ">
            <MainSlider />
          </div>
          <div className="flex flex-col w-full  h-[500px] max-w-lg mx-auto gap-y-[30px] ">
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6 border-2">
              <div className="flex flex-col max-w-[144px] h-full justify-center ">
                <div className="md:text-[20px] text-xs uppercase font-medium leading-tight mb-4 ">
                  Save 30% on all <br /> Tshirts
                </div>
                <a
                  href="/products/1"
                  className="uppercase text-amber-500 text-lg "
                >
                  Shop Now
                </a>
              </div>
              <img
                src={shirt}
                alt="shirt"
                className="absolute w-[100px] h-[250px] md:w-[300px] md:h-[300px] top-0 right-0 object-cover"
              />
            </div>
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6 border-2">
              <div className="flex flex-col max-w-[144px] h-full justify-center ">
                <div className="md:text-[20px] text-xs uppercase font-medium leading-tight mb-4 ">
                  Save 50% on all <br /> Pants
                </div>
                <a
                  href="/products/2"
                  className="uppercase text-amber-500 text-lg"
                >
                  Shop Now
                </a>
              </div>
              <img
                src={pant}
                alt="pant"
                className="absolute  w-[100px]  h-[250px] md:w-[300px] md:h-[300px] top-0 right-0 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
