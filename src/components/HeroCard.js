import React from "react";
import { Link } from "react-router-dom";
import "./heroCard.css";

export default function HeroCard({ character }) {
  const getFirstElements = (elementsAmount, list) => {
    const displayedComics = list.slice(0, elementsAmount);
    return displayedComics;
  };

  return (
    <div id={character.id} className="hero-card">
      <div className="hero-card__data">
        <div className="hero-card__data__thumbnail">
          <img
            src={`${character.thumbnail.path}/portrait_incredible.jpg`}
          ></img>
        </div>
        <div className="hero-card__data__summary">
          <h2 className="hero-card__data__summary__name">{character.name}</h2>
          <p className="hero-card__data__summary__description">
            {getFirstElements(200, character.description)}..
          </p>
          <Link to={`/character/${character.id}`}>
            <button className="hero-card__data__summary__btn">View more</button>
          </Link>
        </div>
      </div>
      <div className="hero-card__comics">
        <h3>Related Comics</h3>
        <ul className="hero-card__comics__list">
          {getFirstElements(4, character.comics.items).map((comic, index) => {
            return <li key={character.id - index}>{comic.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
