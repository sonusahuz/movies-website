import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { options } from "../constants/constants";
import { Dialog, Spinner } from "@material-tailwind/react";
import ReactPlayer from "react-player";
import { useQuery } from "@tanstack/react-query";
export const RelatedMovies = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const params = useParams();
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}/videos`,
        options
      );
      const data = await response.json();
      return data;
    },
  });
  if (isLoading)
    return (
      <Spinner className="flex items-center justify-between h-screen mx-auto" />
    );
  return (
    <div>
      <div className="flex items-center justify-center mx-20 flex-wrap text-center rounded">
        {data?.results?.map((item) => (
          <div className="my-4 bg-gray-500 hover:scale-110 transition duration-300 cursor-pointer object-cover">
            <img
              className=""
              onClick={handleOpen}
              src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
              variant="gradient"
            />
            <h1 className="text-white text-xs py-1">{item.name}</h1>
            <Dialog open={open} handler={handleOpen}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${item.key}`}
                frameborder="0"
                controls
                playing
              />
            </Dialog>
          </div>
        ))}
      </div>
    </div>
  );
};
