import React from "react";

const Model = ({ selectedMovie, setSelectedMovie }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedMovie(null);
    }
  };
  return (
    <div className="backdrop" onClick={handleClick}>
      <h1>
        {selectedMovie.Title} {selectedMovie.Year}
      </h1>
      <img src={selectedMovie.Poster} alt={selectedMovie.Title} />
      <p>
        Plot: <small>{selectedMovie.Plot}</small>
      </p>
      <p>
        Genre:
        <small>
          {selectedMovie.Genre} | Released: {selectedMovie.Released} | Director:
          {selectedMovie.Director}
        </small>
      </p>
      <p>
        Actors: <small>{selectedMovie.Actors}</small>
      </p>
      <p>
        Writers: <small>{selectedMovie.Writer}</small>
      </p>
      <p>
        Language: <small>{selectedMovie.Language}</small>
      </p>
      <p>
        IMDB: <small>{selectedMovie.imdbRating}</small>
      </p>
    </div>
  );
};

export default Model;
