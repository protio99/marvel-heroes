import React, { useState, useEffect } from "react";
import ComicModal from "../components/ComicModal";
import "./carouselComic.css";

export default function CarouselComic({ comicsData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalHide, setModalHide] = useState(true);
  const [selectedComic, setSelectedComic] = useState({
    thumbnail: { path: "" },
  });
  const [comics, setComics] = useState([
    {
      id: "",
      title: "",
      thumbnail: {
        path: "",
      },
    },
  ]);

  useEffect(() => {
    setComics(comicsData);
  }, [comicsData]);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? comics.length - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1 === comics.length ? 0 : currentSlide + 1);
  };

  function comicOnClick() {
    const comicData = comics[currentSlide];
    setSelectedComic(comicData);
    setModalHide(false);
  }
  return (
    <div>
      <div className="carousel">
        <button
          className="carousel__button carousel__button--prev"
          onClick={handlePrevClick}
        ></button>
        <div
          key={comics[currentSlide].id}
          onClick={() => comicOnClick()}
          className="carousel__comic"
        >
          <h4 className="carousel__comic__title">
            {comics[currentSlide].title}
          </h4>
          <img
            src={`${comics[currentSlide].thumbnail.path}/portrait_incredible.jpg`}
            className="carousel__comic__img"
          ></img>
        </div>

        <button
          className="carousel__button carousel__button--next"
          onClick={handleNextClick}
        ></button>
      </div>
      <div
        className={
          modalHide ? "hero__comic-related--close" : "hero__comic-related--show"
        }
      >
        <ComicModal data={selectedComic} setModalHide={setModalHide} />
      </div>
    </div>
  );
}
