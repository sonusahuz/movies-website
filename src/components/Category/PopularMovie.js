import React from "react";
import { SideBar } from "../Layouts/SideBar";
import { MovieCard } from "../Movies/MovieCard";
import { Link } from "react-router-dom";
import useMovieData from "../hooks/useFetch";
import Loading from "../Spinner/Loading";
export const PopularMovie = () => {
  const { loading, moviesSlice } = useMovieData("/movie/now_playing");
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
