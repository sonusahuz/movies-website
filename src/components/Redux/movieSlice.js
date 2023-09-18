import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const BASE_URL = "https://api.themoviedb.org/3/";
export const img_100 = "https://image.tmdb.org/t/p/w300";
export const unavaiable =
  "https://www.movienewz.com/img/films/poster-holder.jpg";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjljZjY3ZTdkOWZhNDAxM2JmMjNlOGU5MDA0MTJlNiIsInN1YiI6IjY0ZmQzNGU0ZmZjOWRlMGVlMTc1NjY5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3x8IUj7kX_UYXT5KhLdvHKAGN0lthiLHvQXJ-GqlMHs",
  },
};

export const movieData = createAsyncThunk("movies", async (url) => {
  const response = await fetch(
    `${BASE_URL}/${url}?language=en-US&page=1`,
    options
  );
  const data = await response.json();
  return data;
});
export const movieSlice = createSlice({
  name: "movie",
  initialState: {
    movies: [],
    searchQuery: "",
    isLoading: false,
    wishlist: [],
  },
  extraReducers: (builder) => {
    builder.addCase(movieData.fulfilled, (state, action) => {
      state.movies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(movieData.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(movieData.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setSearch: (state, action) => {
      state.searchQuery = action.payload;
    },
    addToWishList: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeToWishList: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { setMovies, setSearch, addToWishList, removeToWishList } =
  movieSlice.actions;
export default movieSlice.reducer;
