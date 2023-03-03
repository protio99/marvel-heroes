import React from "react";
import "./heroCard.css";

export default function HeroCard({ character }) {
  return (
    <div id={character.id} className="hero-card">
      <div className="hero-card__info">
        <div className="hero-card__info__img-container">
          <img
            src={`${character.thumbnail.path}/portrait_incredible.jpg`}
          ></img>
        </div>
        <div className="hero-card__info__data">
          <h2 className="hero-card__info__data__name">{character.name}</h2>
          <p className="hero-card__info__data__description">
            {character.description}
          </p>
          <button className="hero-card__info__data__btn">View more</button>
        </div>
      </div>
      <div className="hero-card__comics">
        <h3>Related Comics</h3>
        <ul className="hero-card__comics__list">
          {/* <li>{character.comics.items[0].name}</li>
          <li>{character.comics.items[1].name}</li>
          <li>{character.comics.items[2].name}</li>
          <li>{character.comics.items[3].name}</li> */}
          {character.comics.items.map((comic) => {
            return <li>{comic.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
