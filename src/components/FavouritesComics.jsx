import React, { useState, useEffect } from "react";
import "./favouritesComics.css";

export default function FavouritesComics() {
  const [favouritesComics, setFavouritesComics] = useState([]);

  useEffect(() => {
    const comics = localStorage.getItem("favourites");
    const comicsArray = JSON.parse(comics);
    setFavouritesComics(comicsArray);
  }, []);

  const deleteFavourite = (id) => {
    const updatedFavourites = favouritesComics.filter(
      (comic) => id != comic.id
    );
    setFavouritesComics(updatedFavourites);
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="favourites">
      <div className="favourites__header">
        <img
          src="/assets/icons/btn-favourites-primary.png"
          className="favourites__header__icon"
        ></img>
        <p className="favourites__header__title">My favourites</p>
      </div>
      <div className="favourites__content">
        {favouritesComics.map((comic) => {
          return (
            <div className="favourites__content__comic" key={comic.id}>
              <img
                className="favourites__content__img"
                src={`${comic.thumbnail.path}/portrait_incredible.jpg`}
              ></img>
              <p className="favourites__content__title">{comic.title}</p>
              <img
                src="/assets/icons/btn-delete.png"
                className="favourites__content__icon"
                onClick={() => deleteFavourite(comic.id)}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}
