import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Movie } from "./components/Category/Movie";
import { MoviePage } from "./components/Movies/MoviePage";
import { PopularMovie } from "./components/Category/PopularMovie";
import { UpComingMovie } from "./components/Category/UpComingMovie";
import { TvMovie } from "./components/Category/TvMovie";
import { TopRated } from "./components/Category/TopRated";
import { NowPlaying } from "./components/Category/NowPlaying";
import { Header } from "./components/Layouts/Header";
import { Trending } from "./components/Category/Trending";
import { PlayMovie } from "./components/Movies/PlayMovie";
import { SearchMovies } from "./components/Movies/SearchMovies";
import { WishList } from "./components/Movies/WishList";
export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Trending} />
          <Route path="/movie/:id" Component={MoviePage} />
          <Route path="/nowplaying" Component={NowPlaying} />
          <Route path="/popular" Component={PopularMovie} />
          <Route path="/toprated" Component={TopRated} />
          <Route path="/upcoming" Component={UpComingMovie} />
          <Route path="/series" Component={TvMovie} />
          <Route path="/trending" Component={Movie} />
          <Route path="/search/:query" Component={SearchMovies} />
          <Route path="/movie/:id/videos" Component={PlayMovie} />
          <Route path="/wishlist" Component={WishList} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
