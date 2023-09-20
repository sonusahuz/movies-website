import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Spinner/Loading";
import useMovieData from "../hooks/useFetch";
import { MovieCard } from "../Movies/MovieCard";
import { SideBar } from "../Layouts/SideBar";
export const Trending = () => {
  const { loading, moviesSlice } = useMovieData("/trending/all/day");
  if (loading) return <Loading />;
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
