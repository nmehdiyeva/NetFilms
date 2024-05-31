import React from "react";
import FeaturedMovie from "@/components/featured-movies";
const MovieContainer = ({ movie }) => {
  return <FeaturedMovie movie={movie} isCompact={false} />;
};

export default MovieContainer;
