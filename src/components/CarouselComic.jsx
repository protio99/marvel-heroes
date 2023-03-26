import React, { useState, useEffect } from "react";

export default function CarouselComic({ comicsData }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [comics, setComics] = useState([
    {
      id: "",
      title: "",
      thumbnail: {
        path: "",
      },
    },
  ]);
  console.log("ffsfdfsdfdssdf", comics);
  //   const [currentComic, setCurrentComic] = useState({
  //     id: "",
  //     title: "",
  //     thumbnail: {
  //         path: ""
  //     }
  //   });

  useEffect(() => {
    console.log("fsdfsffffffffffffffffffff", comicsData);
    setComics(comicsData);
  }, [comicsData]);

  const handlePrevClick = () => {
    setCurrentSlide(currentSlide === 0 ? comics.length - 1 : currentSlide - 1);
  };

  const handleNextClick = () => {
    setCurrentSlide(currentSlide + 1 === comics.length ? 0 : currentSlide + 1);
  };
  return (
    <div>
      <div
        key={comics[currentSlide].id}
        //   onClick={() => comicOnClick(index)}
        className="hero__detail__comics__comic"
      >
        <h4 className="hero__detail__comics__comic__tittle">
          {comics[currentSlide].title}
        </h4>
        <img
          src={`${comics[currentSlide].thumbnail.path}/portrait_incredible.jpg`}
          className="hero__detail__comics__comic__img"
        ></img>
      </div>
      <button
        className="carousel__button carousel__button--prev"
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        className="carousel__button carousel__button--next"
        onClick={handleNextClick}
      >
        Next
      </button>
    </div>
  );
}
