import React from "react";
import "./heroCard.css";

export default function HeroCard({ character }) {
  return (
    <div id={character.id} className="hero-card">
      <img></img>
      <div>
        <h2 className="hero-card__name">{character.name}</h2>
        <p className="hero-card__description">{character.description}</p>
        <button>View more</button>
      </div>
      <div className="">
        <h3>Related Comics</h3>
        <ul>
          <li>{character.comics.items[0].name}</li>
          <li>{character.comics.items[1].name}</li>
          <li>{character.comics.items[2].name}</li>
          <li>{character.comics.items[3].name}</li>
        </ul>
      </div>
    </div>
  );
}
