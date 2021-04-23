import React from "react";
import "./style.css";

const AllResults = ({ result, moreMovieInfo }) => {
  return (
    <div className="img-grid">
      {result.map((movie) => (
        <div key={movie.imdbID} className="img-wrap">
          <img
            src={movie.Poster}
            alt={movie.Title}
            onClick={() => moreMovieInfo(movie.imdbID)}
          />
        </div>
      ))}
    </div>
  );
};

export default AllResults;
