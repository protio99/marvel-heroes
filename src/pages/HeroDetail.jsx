import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MarvelService } from "../services/MarvelService";
import ComicModal from "../components/ComicModal";
import "./heroDetail.css";
const _marvelService = new MarvelService();

export default function HeroDetail() {
  const { id } = useParams();
  const [heroData, setHeroData] = useState({
    thumbnail: {
      path: "",
    },
  });
  const [relatedComics, setRelatedComics] = useState([]);
  const [relatedComicsCompleteData, setRelatedComicsCompleteData] = useState(
    []
  );
  const [selectedComic, setSelectedComic] = useState({
    thumbnail: { path: "" },
  });
  const [modalHide, setModalHide] = useState(true);

  async function getHeroInfo(heroId) {
    const response = await _marvelService.GetCharacter(heroId);
    setHeroData(response.results[0]);
    setRelatedComics(response.results[0].comics.items);
  }
  useEffect(() => {
    getHeroInfo(id);
  }, [id]);

  async function getComicInfo(comicsArray) {
    const comicsData = [];
    for (const comic of comicsArray) {
      const url = comic.resourceURI;
      const response = await _marvelService.GetComicInfo(url);
      comicsData.push(response.results[0]);
    }
    setRelatedComicsCompleteData(comicsData);
  }

  useEffect(() => {
    getComicInfo(relatedComics);
  }, [relatedComics]);

  function comicOnClick(index) {
    const comicData = relatedComicsCompleteData[index];
    setSelectedComic(comicData);
    setModalHide(false);
  }

  return (
    <div className="hero">
      <div className="hero__detail">
        <div className="hero__detail__data">
          <img src={`${heroData.thumbnail.path}/portrait_incredible.jpg`}></img>
          <div className="hero__detail_data__summary">
            <h4>{heroData.name}</h4>
            <p>{heroData.description}</p>
          </div>
        </div>
        <div className="hero__detail__comics">
          {relatedComicsCompleteData.map((comic, index) => {
            return (
              <div
                key={comic.id}
                onClick={() => comicOnClick(index)}
                className="hero__detail__comics__comic"
              >
                <h4 className="hero__detail__comics__comic__tittle">
                  {comic.title}
                </h4>
                <img
                  src={`${comic.thumbnail.path}/portrait_incredible.jpg`}
                  className="hero__detail__comics__comic__img"
                ></img>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={
          modalHide ? "hero__comic-related" : "hero__comic-related--show"
        }
      >
        <ComicModal data={selectedComic} setModalHide={setModalHide} />
      </div>
    </div>
  );
}
