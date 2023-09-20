import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieData } from "../Redux/movieSlice";

const useMovieData = (queryParams) => {
  const dispatch = useDispatch();
  const moviesSlice = useSelector((state) => state.movies?.movies);
  const loading = useSelector((state) => state.movies.isLoading);
  useEffect(() => {
    dispatch(movieData(queryParams));
  }, [dispatch, queryParams]);
  return { moviesSlice, loading };
};

export default useMovieData;
