import React from "react";
import { unavaiable, img_100 } from "../constants/constants";
export const MovieCard = ({ items }) => {
  return (
    <div className="w-[300px] h-[400px] sm:w-[200px] bg-gray-500 sm:h-[370px] m-4 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover">
      <h1 className=" bg-red-500 text-white absolute px-2 py-1">
        {items.vote_average}
      </h1>
      <img
        src={items.poster_path ? `${img_100}/${items.poster_path}` : unavaiable}
        className="sm:h-72 sm:w-56 w-80 h-80"
      />

      <h1 className="text-white text-center py-1">
        {items.name || items.title}
      </h1>
      <h1 className="text-white text-center">{items.release_date}</h1>
    </div>
  );
};
