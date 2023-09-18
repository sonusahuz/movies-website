import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { movieData } from "../Redux/movieSlice";
import { Link } from "react-router-dom";
import { MovieCard } from "../Movies/MovieCard";
import { SideBar } from "../Layouts/SideBar";
import { Spinner } from "@material-tailwind/react";
export const Trending = () => {
  const dispatch = useDispatch();
  const moviesSlice = useSelector((state) => state.movies?.movies);
  useEffect(() => {
    dispatch(movieData("/trending/all/day"));
  }, []);

  const loading = useSelector((state) => state.movies.isLoading);
  if (loading)
    return (
      <Spinner className="flex items-center justify-center h-screen mx-auto" />
    );
  return (
    <div className="flex items-start justify-start sm:mx-5 md:mx-10 lg:mx-20 mx-2">
      <SideBar />
      <div className="flex items-center justify-between flex-wrap">
        {moviesSlice?.results?.map((items) => (
          <Link to={`/movie/${items.id}`}>
            <MovieCard items={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};
