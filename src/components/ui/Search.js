import React, { useState } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState();
  const onChange = (queryValue) => {
    setText(queryValue);
    // prop
    getQuery(queryValue);
  };

  return (
    <section className="search">
      <form>
        <input
          className="form-control"
          type="text"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search characters..."
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
