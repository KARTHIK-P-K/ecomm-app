import React from "react";
import useFetch from "../hooks/useFetch";
import Footer from "../components/Footer";
import LatestProducts from "../components/LatestProducts";
import Hero from "../components/Hero";

const Home = () => {
  const { data } = useFetch("products?populate=*&filters[isNew]=true");
  // console.log(data);
  return (
    <div className="px-[60px]">
      <Hero />
      <LatestProducts data={data} />
      <Footer />
    </div>
  );
};

export default Home;
