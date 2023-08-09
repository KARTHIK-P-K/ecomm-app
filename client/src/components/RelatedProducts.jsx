import React from "react";
import useFetch from "../hooks/useFetch";
import Product from "./Product";
import ProductSlider from "./productSlider";

const RelatedProducts = ({ categoryTitle }) => {
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  );

  return (
    <div className="mt-32">
      <div className="text-2xl mb-4">Related Products</div>
      <ProductSlider data={data} />
    </div>
  );
};

export default RelatedProducts;
