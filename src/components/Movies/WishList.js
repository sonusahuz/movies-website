import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SideBar } from "../Layouts/SideBar";
import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";
export const WishList = () => {
  const wishList = useSelector((state) => state.movies.wishlist);
  return (
    <div className="flex items-start justify-start sm:mx-5 md:mx-10 lg:mx-20 mx-2">
      <SideBar />
      <h1 className="text-center font-bold text-4xl  text-white absolute ml-[600px]">
        Wishlist 💓
      </h1>
      <div className="flex items-center justify-between flex-wrap mt-10">
        {wishList.map((items) => (
          <Link to={`/movie/${items.id}`}>
            <MovieCard items={items} />
            {console.log(items)}
          </Link>
        ))}
      </div>
    </div>
  );
};
