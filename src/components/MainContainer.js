import React from "react";
import VideoBackGround from "./VideoBackGround";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (movies === null) return;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackGround movieID={id} />
    </div>
  );
};
export default MainContainer;
