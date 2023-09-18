import React, { useEffect, useState } from "react";
import {
  addToWishList,
  movieData,
  removeToWishList,
  unavaiable,
} from "../Redux/movieSlice";
import toast, { Toast, Toaster } from "react-hot-toast";
import { useParams, Link } from "react-router-dom";
import { img_100 } from "../Redux/movieSlice";
import { options } from "../Redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import { RelatedMovies } from "./RelatedMovies";

export const MoviePage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const moviesSlice = useSelector((state) => state.movies.movies);
  const wishList = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(movieData(`/movie/${params.id}`));
  }, []);
  const addWislist = (e) => {
    toast.success("Item has been added to wishlist");
    dispatch(addToWishList(e));
  };
  const remove = (e) => {
    toast.success("Item has been remove to wishlist");
    dispatch(removeToWishList(e));
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos`,
        options
      );
      const data = await response.json();
    };
    fetchData();
  }, []);

  const loading = useSelector((state) => state.movies.isLoading);
  if (loading)
    return (
      <Spinner className="flex items-center justify-between h-screen mx-auto" />
    );
  return (
    <div className="sm:mx-5 md:mx-10 lg:mx-20 mx-2 mt-2">
      <Toaster />
      <div className="md:flex md:items-start md:justify-start py-2">
        <div className="w-[25%] fixed">
          <Link to={moviesSlice.homepage}>
            <img
              src={
                moviesSlice.poster_path
                  ? `${img_100}/${moviesSlice.poster_path}`
                  : unavaiable
              }
              className="w-[1000px]"
            />
          </Link>
        </div>
        <div className="ml-[400px] w-[500px] fixed">
          <h1 className="text-white text-3xl font-bold">
            {moviesSlice.original_title}
          </h1>
          <h1 className="text-white py-2">Overview</h1>
          <p className="text-white font-light text-sm py-2">
            {moviesSlice.overview}
          </p>
          <h1 className="text-white text-xl font-bold py-2">
            Rating : {moviesSlice.vote_average}
          </h1>
          <h1 className="text-white text-xl font-bold py-2">
            Release Date: {moviesSlice.release_date}
          </h1>
          <h1 className="text-white text-xl font-bold py-2">
            Status : {moviesSlice.status}
          </h1>

          <h1 className="text-white text-xl font-bold py-2">
            Language : {moviesSlice.original_language}
          </h1>
          <div className="mt-4">
            <Link to={`/movie/${moviesSlice.id}/videos`}>
              <button className="bg-blue-800 text-white px-4 py-2 text-sm hover:scale-110 transition duration-300 cursor-pointer object-cover">
                Watch Releted Video
              </button>
            </Link>
            {wishList?.wishlist.some((p) => p.id === moviesSlice.id) ? (
              <button
                onClick={() => remove(moviesSlice)}
                className="bg-red-800 text-white px-4 py-2 text-sm ml-4 hover:scale-110 transition duration-300 cursor-pointer object-cover"
              >
                remove To WatchList
              </button>
            ) : (
              <button
                onClick={() => addWislist(moviesSlice)}
                className="bg-blue-800 text-white px-4 py-2 text-sm ml-4 hover:scale-110 transition duration-300 cursor-pointer object-cover"
              >
                Add To WatchList
              </button>
            )}
          </div>
        </div>
        <div className="w-[40%] ml-[70%]">
          <RelatedMovies />
        </div>
      </div>
    </div>
  );
};
