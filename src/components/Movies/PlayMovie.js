import { Spinner } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { movieData, unavaiable } from "../Redux/movieSlice";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
export function PlayMovie() {
  const [open, setOpen] = React.useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const moviesSlice = useSelector((state) => state.movies.movies);
  useEffect(() => {
    dispatch(movieData(`/movie/${params.id}/videos`));
  }, []);
  const loading = useSelector((state) => state.movies.isLoading);
  if (loading)
    return (
      <Spinner className="flex items-center justify-center h-screen mx-auto" />
    );
  console.log(moviesSlice);
  return (
    <>
      <div className="flex items-center justify-between flex-wrap sm:mx-5 md:mx-10 lg:mx-20 mx-2">
        {moviesSlice?.results?.map((item) => (
          <Link to={`https://www.youtube.com/watch?v=${item.key}`}>
            <div className="w-[300px] bg-gray-500 m-4 rounded hover:scale-110 transition duration-300 cursor-pointer object-cover">
              <img
                src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                variant="gradient"
              />
              <h1 className="text-sm text-white">{item.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
