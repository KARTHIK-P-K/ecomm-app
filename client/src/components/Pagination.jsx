import React from "react";

const Pagination = ({ currentPage, setCurrentPage, postsPerPage, data }) => {
  let pages = [];
  for (let i = 0; i < Math.ceil(data.length / postsPerPage); i++) {
    pages.push(i + 1);
  }

  const handleClick = (page) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <div className="flex  gap-2 justify-center mt-4 ">
      {pages.map((page, index) => (
        <div key={index}>
          <button
            className={`border-2 border-slate-300 shadow-md font-bold py-1 px-4 mx-4 rounded-lg cursor-pointer ${
              page === currentPage ? "bg-amber-300" : ""
            } `}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Pagination;
