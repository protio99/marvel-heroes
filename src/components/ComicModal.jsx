import React, { useState, useEffect } from "react";
import "./comicModal.css";

export default function ComicModal({ data, setModalHide }) {
  const [validationComicAdded, setValidationComicAdded] = useState(false);
  const [comicData, setComicData] = useState({
    thumbnail: { path: "" },
  });

  useEffect(() => {
    const storageFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (!data) {
      return;
    }
    setComicData(data);

    if (!storageFavourites) {
      localStorage.setItem("favourites", JSON.stringify([]));
    } else {
      const validationAdded = storageFavourites.filter(
        (comic) => comic.id === comicData.id
      );
      console.log("------------", validationAdded);

      if (validationAdded.length !== 0) {
        setValidationComicAdded(true);
      }
    }
  }, [data]);
  useEffect(() => {
    const storageFavourites = JSON.parse(localStorage.getItem("favourites"));
    if (!storageFavourites) {
      localStorage.setItem("favourites", JSON.stringify([]));
    } else {
      const validationAdded = storageFavourites.filter(
        (comic) => comic.id === comicData.id
      );
      console.log("------------", validationAdded);

      if (validationAdded.length !== 0) {
        setValidationComicAdded(true);
      }
    }
  }, [comicData]);

  const addToFavourites = () => {
    setValidationComicAdded(true);
    const storageFavourites = JSON.parse(localStorage.getItem("favourites"));
    storageFavourites.push(comicData);
    localStorage.setItem("favourites", JSON.stringify(storageFavourites));
  };

  return (
    <div className="modal-bg">
      <div key={comicData.id} className="comic-modal">
        <div className="comic-modal__content">
          <img
            src={`${comicData.thumbnail.path}/portrait_incredible.jpg`}
          ></img>
          <div className="comic-modal__content__text">
            <h4 className="comic-modal__content__text--title">
              {comicData.title}
            </h4>
            <p className="comic-modal__content__text--description">
              {comicData.description}
            </p>
            <button
              className="comic-modal__content__close-btn"
              onClick={() => setModalHide(true)}
            ></button>
          </div>
        </div>
        <div className="comic-modal__btns">
          {!validationComicAdded ? (
            <button
              className="comic-modal__btns__btn comic-modal__btns__add"
              onClick={() => addToFavourites()}
            >
              <img
                src="/assets/icons/btn-favourites-default.png"
                className="comic-modal__btns--icon"
              ></img>
              <p>Add to favourites</p>
            </button>
          ) : (
            <button className="comic-modal__btns__btn comic-modal__btns__added">
              <img
                src="/assets/icons/btn-favourites-primary.png"
                className="comic-modal__btns--icon"
              ></img>
              <p>Added to favourites</p>
            </button>
          )}

          <button className="comic-modal__btns__btn comic-modal__btns__buy">
            <img
              src="/assets/icons/shopping-cart-primary.png"
              className="comic-modal__btns--icon"
            ></img>
            <p>Buy for $3.99</p>
          </button>
        </div>
      </div>
    </div>
  );
}
