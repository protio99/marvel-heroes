import React from "react";

export default function HeroCard({ character }) {
  return (
    <div>
      <h2>{character.name}</h2>
      <p>{character.description}</p>
      <div>
        <h3>Related Comics</h3>
        <ul>
          {character.comics.items.map((comic) => {
            return <li>{comic.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
