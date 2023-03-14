import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MarvelService } from "../services/MarvelService";
const _marvelService = new MarvelService();

export default function HeroDetail() {
  const { id } = useParams();
  const [heroData, setHeroData] = useState([]);
  const [relatedComics, setRelatedComics] = useState([]);
  const [relatedComicsCompleteData, setRelatedComicsCompleteData] = useState(
    []
  );

  async function getHeroInfo(heroId) {
    const response = await _marvelService.GetCharacter(heroId);
    setHeroData(response.data.data.results);
    setRelatedComics(response.data.data.results[0].comics.items);
  }
  useEffect(() => {
    getHeroInfo(id);
  }, [id]);

  //   async function getComicInfoByUrl(comicURL) {
  //     const response = await _marvelService.GetComicInfo(comicURL);
  //     const comicData = response.data.data.results[0];
  //     return comicData;
  //   }

  //   async function getComicInfo(comicsArray) {
  //     const comics = comicsArray.map(async (comic) => {
  //       const url = comic.resourceURI;
  //       const response = await _marvelService.GetComicInfo(url);
  //       console.log("Response", response);
  //       return response.data.data.results[0];
  //     });
  //     const comicsData = Promise.all(comics);
  //     setRelatedComicsCompleteData(comicsData);
  //   }
  async function getComicInfo(comicsArray) {
    const comicsData = [];
    for (const comic of comicsArray) {
      const url = comic.resourceURI;
      const response = await _marvelService.GetComicInfo(url);
      comicsData.push(response.data.data.results[0]);
    }
    setRelatedComicsCompleteData(comicsData);
  }

  useEffect(() => {
    // relatedComics.forEach(async (comic, index) => {
    //   const url = comic.resourceURI;
    //   const response = await getComicInfoByUrl(url);
    //   setRelatedComicsCompleteData((currentArray) => [
    //     ...currentArray,
    //     response,
    //   ]);
    //   console.log("index-----", index);
    // });
    getComicInfo(relatedComics);
  }, [relatedComics]);
  console.log("--------", heroData);
  return (
    <div className="hero">
      <div className="hero__data">
        {heroData.map((hero) => {
          return (
            <div>
              <h4>{hero.name}</h4>
              <img src={`${hero.thumbnail.path}/portrait_incredible.jpg`}></img>
              <p>{hero.description}</p>
            </div>
          );
        })}
      </div>
      <div className="hero__comics">
        {relatedComicsCompleteData.map((comic) => {
          return (
            <div>
              <h4>{comic.title}</h4>
              <img
                src={`${comic.thumbnail.path}/portrait_incredible.jpg`}
              ></img>
              <p>{comic.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
