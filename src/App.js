import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import axios from "axios";
import CharacterGrid from ".//components/characters/CharacterGrid";
import Search from "./components/ui/Search";

const App = () => {
  // no context small app
  const [characters, setCharacters] = useState([]);
  const [loading, setLoadng] = useState(true);
  // query from the search bar Search.js
  const [query, setQuery] = useState("");
  // http request
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setCharacters(response.data);
      setLoadng(false);
    };
    fetchData();
  }, [query]);
  // add query as a dependency for search

  return (
    <div className="container">
      <Header />
      <Search
        getQuery={(queryValue) => {
          setQuery(queryValue);
        }}
      />
      <CharacterGrid loading={loading} characters={characters} />
    </div>
  );
};

export default App;
