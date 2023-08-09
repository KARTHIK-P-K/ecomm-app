import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

import { Navigation, Pagination, FreeMode } from "swiper/modules";
import Product from "./Product";

const productSlider = ({ data }) => {
  return (
    <div className="  ">
      <Swiper
        modules={[Pagination, Navigation]}
        loop={false}
        navigation={true}
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        className=""
      >
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id} className="flex justify-center">
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default productSlider;
