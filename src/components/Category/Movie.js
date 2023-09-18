import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieData } from "../Redux/movieSlice";
import { Link } from "react-router-dom";
import { MovieCard } from "../Movies/MovieCard";
import { SideBar } from "../Layouts/SideBar";
export const Movie = () => {
  const dispatch = useDispatch();
  const moviesSlice = useSelector((state) => state.movies?.movies);
  useEffect(() => {
    dispatch(movieData("/discover/movie"));
  }, []);
  return (
    <div className="flex items-start justify-start sm:mx-5 md:mx-10 lg:mx-20 mx-2">
      <SideBar />
      <div className="sm:flex sm:items-center sm:justify-between flex justify-center items-center flex-wrap">
        {moviesSlice?.results?.map((items) => (
          <Link to={`/movie/${items.id}`}>
            <MovieCard items={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};
