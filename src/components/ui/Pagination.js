import React, { useState } from "react";
import { changePageNumber } from "../../features/filter/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.filter);

  const seletedStyle = `bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer ${
    tags.length > 0 ? "hidden" : "block"
  }`;

  const unSelectedStyle = `bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer ${
    tags.length > 0 ? "hidden" : "block"
  }`;

  const handlePageNumber = (number) => {
    setPage(number);
    dispatch(changePageNumber(number));
  };

  return (
    <section className="pt-12">
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end">
        <div
          className={page === 1 ? seletedStyle : unSelectedStyle}
          onClick={() => handlePageNumber(1)}
        >
          1
        </div>
        <div
          className={page === 2 ? seletedStyle : unSelectedStyle}
          onClick={() => handlePageNumber(2)}
        >
          2
        </div>
        <div
          className={page === 3 ? seletedStyle : unSelectedStyle}
          onClick={() => handlePageNumber(3)}
        >
          3
        </div>
        <div
          className={page === 4 ? seletedStyle : unSelectedStyle}
          onClick={() => handlePageNumber(4)}
        >
          4
        </div>
      </div>
    </section>
  );
};

export default Pagination;
