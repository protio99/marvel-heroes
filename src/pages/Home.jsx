import React, { useState, useEffect } from "react";
import { MarvelService } from "../services/MarvelService";
import HeroCard from "../components/HeroCard";
import Paginator from "../components/Paginator";
import "./home.css";

const _marvelService = new MarvelService();

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  console.log("selected page", currentPage);
  async function getCharacters(currentPage) {
    const response = await _marvelService.GetCharacters(currentPage);
    console.log(response);
    setCharacters(response.data.data.results);
  }
  useEffect(() => {
    getCharacters(currentPage);
  }, [currentPage]);

  const paginate = (selectedPage) => {
    setCurrentPage(selectedPage);
  };

  return (
    <div className="home">
      <div className="home__head">
        <div className="home__head__tittle">
          <img src="./assets/icons/characters.png"></img>
          <h3>Characters</h3>
        </div>
        <div>Sort by</div>
      </div>
      <div className="home__characters">
        {characters.map((character) => {
          return <HeroCard key={character.id} character={character}></HeroCard>;
        })}
      </div>
      <div className="home__paginator">
        <Paginator
          totalCharacters={100}
          charactersPerPage={10}
          setPage={paginate}
        />
      </div>
    </div>
  );
}
