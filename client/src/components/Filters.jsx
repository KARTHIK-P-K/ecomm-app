import React, { useState } from "react";

const Filters = ({ sort, setSort, setMaxPrice, maxPrice }) => {
  return (
    <div className="category p-4 w-full md:w-[286px]">
      <div className="filterItem  ">
        <h2 className="text-xl mb-2 font-semibold">Sort by</h2>
        <div className="inputItem">
          <input
            type="radio"
            id="asc"
            value="asc"
            name="price"
            onChange={(e) => setSort("asc")}
          />
          <label htmlFor="asc">Price (Lowest first)</label>
        </div>
        <div className="inputItem">
          <input
            type="radio"
            id="desc"
            value="desc"
            name="price"
            onChange={(e) => setSort("desc")}
          />
          <label htmlFor="desc">Price (Highest first)</label>
        </div>
      </div>
      <div className="">
        <h2 className="text-xl mb-2 font-semibold">Filter by price($)</h2>
        <div className="">
          <input
            type="range"
            min={0}
            max={50}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
          <div className="">
            <span>0</span>
            <span>{maxPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
