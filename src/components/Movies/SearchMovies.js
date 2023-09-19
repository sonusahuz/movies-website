import React, { useDebugValue, useEffect, useState } from "react";
import { Spinner } from "@material-tailwind/react";
import { SideBar } from "../Layouts/SideBar";
import { options } from "../constants/constants";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { MovieCard } from "./MovieCard";
import { useQuery } from "@tanstack/react-query";
export const SearchMovies = () => {
  const { query } = useParams();
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${query}&page=1`,
        options
      );
      const data = await response.json();
      return data;
    },
    queryKey: ["search product"],
    enabled: !!query,
  });

  if (isLoading)
    return (
      <Spinner className="flex items-center justify-center h-screen mx-auto" />
    );
  return (
    <div className="flex items-start justify-start sm:mx-5 md:mx-10 lg:mx-20 mx-2">
      <SideBar />
      <div className="flex items-center justify-between flex-wrap">
        {data?.results?.map((items) => (
          <Link to={`/movie/${items.id}`}>
            <MovieCard items={items} />
          </Link>
        ))}
      </div>
    </div>
  );
};
