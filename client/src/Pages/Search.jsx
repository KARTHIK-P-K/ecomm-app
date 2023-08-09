import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Product from "../components/Product";
import CategoryNav from "../components/CategoryNav";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

const Search = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const searchTerm = searchParams.get("query");
  const { data } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  );
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentData = data.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="mb-[30px]  pt-20 lg:pt-4 xl:pt-0 ">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px] ">
          <CategoryNav />

          <div>
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {data?.length > 0
                ? `${data.length} result${
                    data.length === 1 ? "" : "s"
                  } found for ${searchTerm}`
                : `no result found for ${searchTerm}`}
            </div>
            <div className="grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]  ">
              {currentData?.map((product) => {
                return (
                  // <div className=" justify-items-center items-center">
                  <Product product={product} key={product.id} />
                  // </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        postsPerPage={postsPerPage}
        data={data}
      />
    </div>
  );
};

export default Search;
