import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Badge, Button } from "@material-tailwind/react";
export const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
    }
    setSearchTerm("");
  };
  const wishList = useSelector((state) => state.movies.wishlist);

  return (
    <div className="flex items-center justify-between sm:mx-5 md:mx-10 lg:mx-20 py-3 ">
      <Link to={"/"}>
        <h1 className="text-white md:text-3xl font-bold  text-xl">
          Movies Hub
        </h1>
      </Link>
      <div>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="sm:w-56 md:w-60 lg:w-96 py-2 bg-gray-500 px-3 text-white w-36"
            placeholder="search movie,web series, and more..."
          />
          <button className="bg-blue-800 text-white px-4 py-2">search</button>
        </form>
      </div>
      <div>
        <Badge content={wishList.length}>
          <NavLink
            className="bg-blue-800 text-white px-4 py-2 "
            to={`/wishlist`}
          >
            Wishlist
          </NavLink>
        </Badge>
      </div>
    </div>
  );
};
