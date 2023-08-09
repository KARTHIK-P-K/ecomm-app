import React from "react";
import useFetch from "../hooks/useFetch";

import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";

const Home = () => {
  const { data } = useFetch("products?populate=*&filters[isNew]=true");
  // console.log(data);
  return (
    <div>
      <Hero />
      <LatestProducts data={data} />
    </div>
  );
};

export default Home;
