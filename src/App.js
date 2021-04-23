import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./components/Search";
import AllResults from "./components/AllResults";
import Model from "./components/Model";
import "./App.css";

const App = () => {
  //for results
  const [result, setResult] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const apiKey = process.env.REACT_APP_API_KEY;

  const search = async (searchValue) => {
    const results = await axios.get(
      `https://www.omdbapi.com/?s=${searchValue}&apikey=${apiKey}`
    );

    setResult(results.data.Search);
  };

  const moreMovieInfo = async (itemId) => {
    const info = await axios.get(
      `https://www.omdbapi.com/?i=${itemId}&apikey=${apiKey}`
    );

    setSelectedMovie(info.data);
  };

  return (
    <div className="App">
      <a href="/">Movie Database</a>
      <Search search={search} />
      <AllResults result={result} moreMovieInfo={moreMovieInfo} />
      {selectedMovie && (
        <Model
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
        />
      )}
    </div>
  );
};

export default App;
