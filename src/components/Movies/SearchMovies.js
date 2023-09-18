import React, { useDebugValue, useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { SideBar } from "../Layouts/SideBar";
import { options } from "../Redux/movieSlice";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";
export const SearchMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { query } = useParams();

  const fetchMoreData = () => {
    setLoading(true);
    setTimeout(() => {
      const fetchData = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/multi?query=${query}&page=${page}`,
          options
        );
        const data = await response.json();
        setMovies(data.results);
        setLoading(false);
        setPage((prev) => prev + 1);
      };
      fetchData();
      setLoading(false);
      setMovies((prevItems) => [...prevItems, ...movies]);
      setLoading(false);
      setPage((prevPage) => prevPage + 1);
    }, 1000);
  };
  useEffect(() => {
    fetchMoreData();
  }, [query]);

  if (loading)
    return (
      <Spinner className="flex items-center justify-center h-screen mx-auto" />
    );

  return (
    <div className="flex items-start justify-start sm:mx-5 md:mx-10 lg:mx-20 mx-2">
      <SideBar />
      <div className="flex items-center justify-between flex-wrap">
        {movies?.map((items) => (
          <Link to={`/movie/${items.id}`}>
            <MovieCard items={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};
