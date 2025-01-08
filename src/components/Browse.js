import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //fetch data from tmdb apis and update store

  useNowPlayingMovies()

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
      .
    </div>
  );
};

export default Browse;
