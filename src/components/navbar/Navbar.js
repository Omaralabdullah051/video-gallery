import React from "react";
import SearchSvg from "../../assets/svgImages/SearchSvg";
import Search from "./Search";
import { Link } from "react-router-dom";
import logo from "../../assets/gallery.png";

const navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <div className="flex justify-center items-center gap-2">
          <div>
            <Link to="/">
              <img className="h-10" src={logo} alt="Learn with Sumit" />
            </Link>
          </div>
          <div>
            <p className="font-bold cursor-pointer">
              <Link to="/">
                <i>Video Gallery</i>
              </Link>
            </p>
          </div>
        </div>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
          <SearchSvg />
        </div>
      </div>
    </nav>
  );
};

export default navbar;
