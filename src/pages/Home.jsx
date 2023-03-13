import React, { useState, useEffect } from "react";
import { MarvelService } from "../services/MarvelService";
import HeroCard from "../components/HeroCard";
import Paginator from "../components/Paginator";
import "./home.css";

const _marvelService = new MarvelService();

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState("name");
  console.log("selected page", currentPage);

  async function getCharacters(currentPage, orderBy) {
    const response = await _marvelService.GetCharacters(currentPage, orderBy);
    console.log(response);
    setCharacters(response.data.data.results);
  }
  useEffect(() => {
    getCharacters(currentPage, orderBy);
  }, [currentPage, orderBy]);

  const paginate = (selectedPage) => {
    setCurrentPage(selectedPage);
  };
  console.log("order by--------", orderBy);
  return (
    <div className="home">
      <div className="home__head">
        <div className="home__head__tittle">
          <img src="./assets/icons/characters.png"></img>
          <h3>Characters</h3>
        </div>
        <div>
          <select
            name="sort-by"
            id="sort-by"
            // defaultValue="sort-by-option"
            value={orderBy} // ...force the select's value to match the state variable...
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="sort-by-option" disabled>
              Sort by
            </option>
            <option value="name">Name</option>
            <option value="modified">Modified</option>
          </select>
        </div>
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
