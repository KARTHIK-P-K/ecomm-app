import React from "react";
import ProductSlider from "./productSlider";

const LatestProducts = ({ data }) => {
  return (
    <div className="m-16 w-full mx-auto">
      <h2 className="text-2xl mb-5 text-center xl:text-left">
        Latest Products
      </h2>

      <ProductSlider data={data} />
    </div>
  );
};

export default LatestProducts;
