import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/navigation";

import { Navigation, Pagination, FreeMode } from "swiper/modules";
import Rating from "./Rating";

const Ratings = ({ data, productId }) => {
  const ratings = data[0].attributes.ratings?.data;

  return (
    <div>
      <h1 className="text-2xl ">Reviews</h1>

      <Swiper
        modules={[Pagination, Navigation]}
        loop={false}
        navigation={true}
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1080: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        // freeMode={true}
        pagination={{
          clickable: true,
        }}
        className="border-3"
      >
        {ratings.map((rating) => (
          <SwiperSlide key={rating.id}>
            <Rating rate={rating} />
          </SwiperSlide>
        ))}
      </Swiper>
      {ratings.length === 0 && (
        <div className="font-semibold md:text-4xl text-3xl flex justify-center items-center h-[100px] mt-8">
          No Reviews
        </div>
      )}
    </div>
  );
};

export default Ratings;
