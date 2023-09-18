import React from "react";
import { NavLink } from "react-router-dom";
export const SideBar = () => {
  return (
    <div className="hidden md:block">
      <div className="flex flex-col ">
        <NavLink
          className="text-white w-40 mt-2 capitalize hover:bg-gray-500 py-1 px-2 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover"
          to={"/trending"}
        >
          Trending
        </NavLink>
        <NavLink
          className="text-white w-40 mt-2 capitalize hover:bg-gray-500 py-1 px-2 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover"
          to={"/"}
        >
          Movies
        </NavLink>
        <NavLink
          className="text-white w-40 mt-2 capitalize hover:bg-gray-500 py-1 px-2 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover"
          to={"/nowplaying"}
        >
          now playing
        </NavLink>
        <NavLink
          className="text-white w-40 mt-2 capitalize hover:bg-gray-500 py-1 px-2 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover"
          to={"/popular"}
        >
          Popular Movies
        </NavLink>

        <NavLink
          className="text-white w-40 mt-2 capitalize hover:bg-gray-500 py-1 px-2 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover"
          to={"/series"}
        >
          Tv Series
        </NavLink>
        <NavLink
          className="text-white w-40 mt-2 capitalize hover:bg-gray-500 py-1 px-2 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover"
          to={"/toprated"}
        >
          top rated
        </NavLink>
        <NavLink
          className="text-white w-40 mt-2 capitalize hover:bg-gray-500 py-1 px-2 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover"
          to={"/upcoming"}
        >
          upcoming
        </NavLink>
        <NavLink
          className="text-white w-40 mt-2 capitalize hover:bg-gray-500 py-1 px-2 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover"
          to={"/wishlist"}
        >
          Wishlist
        </NavLink>
      </div>
    </div>
  );
};
