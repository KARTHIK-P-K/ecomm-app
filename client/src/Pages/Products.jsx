import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CategoryNav from "../components/CategoryNav";
import Product from "../components/Product";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";

const Products = () => {
  const [title, setTitle] = useState(null);
  const [maxPrice, setMaxPrice] = useState(50);
  const [sort, setSort] = useState("none");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const { id } = useParams();
  const { data } = useFetch(
    `/products?populate=*&filters[categories][id][$eq]=${id}&[filters][price][$lte]=${maxPrice}&${
      sort === "none" ? "" : `&sort=price:${sort}`
    }
`
  );
  // console.log(data[0].attributes.categories.data[0].attributes.title);
  useEffect(() => {
    if (data[0]) {
      setTitle(data[0].attributes.categories.data[0].attributes.title);
    }
  }, [sort]);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentData = data.slice(firstPostIndex, lastPostIndex);
  console.log(currentPage);
  return (
    <div className="mb-16 pt-40 lg:pt-0 px-[60px]">
      <div className="container mx-auto">
        <div className="flex md:items-start md:flex-row items-center flex-col gap-x-[30px]">
          {/* <CategoryNav /> */}
          <Filters
            sort={sort}
            setSort={setSort}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
          />
          <main>
            <div className="py-3 text-center lg:text-left text-xl uppercase">
              {title}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px] ">
              {currentData.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </div>
            <div className="pb-4"></div>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              data={data}
            />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Products;
