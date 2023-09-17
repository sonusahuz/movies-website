import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { News } from "./components/News/News";
import { Search } from "./components/Search/Search";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={News} />
        <Route path="/search" Component={Search} />
      </Routes>
    </BrowserRouter>
  );
};
