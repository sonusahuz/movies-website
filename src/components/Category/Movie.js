import React from "react";
import { Link } from "react-router-dom";
import { MovieCard } from "../Movies/MovieCard";
import { SideBar } from "../Layouts/SideBar";
import useMovieData from "../hooks/useFetch";
import Loading from "../Spinner/Loading";
export const Movie = () => {
  const { loading, moviesSlice } = useMovieData("/discover/movie");
  if (loading) return <Loading />;
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
