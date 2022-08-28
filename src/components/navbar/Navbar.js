import React from "react";
import Lws from "../../assets/svgImages/Lws";
import SearchSvg from "../../assets/svgImages/SearchSvg";
import Search from "./Search";

const navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/">
          <Lws />
        </a>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
          <SearchSvg />
        </div>
      </div>
    </nav>
  );
};

export default navbar;
