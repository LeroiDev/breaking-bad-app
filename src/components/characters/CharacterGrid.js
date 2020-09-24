import React from "react";
import spinner from "../../img/spinner.gif";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ loading, characters }) => {
  return loading ? (
    <img
      src={spinner}
      style={{ width: "300px", display: "block", margin: "auto" }}
      alt=""
    />
  ) : (
    <section className="cards">
      {characters.map((char) => (
        <CharacterItem key={char.char_id} char={char} />
      ))}
    </section>
  );
};
export default CharacterGrid;
