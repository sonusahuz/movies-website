import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL, options } from "../constants/constants";
export const movieData = createAsyncThunk("movies", async (url) => {
  const response = await fetch(
    `${BASE_URL}/${url}?language=en-US&page=2`,
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
