import React, { useState, useEffect } from "react";
import { MarvelService } from "../services/MarvelService";
import HeroCard from "../components/HeroCard";
import Navbar from "../components/Navbar";
import "./home.css";

const _marvelService = new MarvelService();

export default function Home() {
  const [characters, setCharacters] = useState([]);

  async function getCharacters() {
    const response = await _marvelService.GetCharacters();
    console.log(response);
    setCharacters(response.data.data.results);
  }
  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className="home">
      <Navbar />
      <div className="home__characters">
        {characters.map((character) => {
          return <HeroCard key={character.id} character={character}></HeroCard>;
        })}
      </div>
    </div>
  );
}
