import { useEffect, useState } from "react";
import "./App.css";
import { MarvelService } from "./services/MarvelService";
import HeroCard from "./components/HeroCard";
const _marvelService = new MarvelService();

function App() {
  const [characters, setCharacters] = useState([]);

  async function getCharacters() {
    const response = await _marvelService.GetCharacters();
    console.log(response);
    setCharacters(response.data.data.results);
  }
  useEffect(() => {
    // _marvelService
    //   .GetCharacters()
    //   .then((response) => {
    //     setCharacters(response.data.data.results);
    //     console.log("---------------", response.data.data.results);
    //   })
    //   .catch((e) => {
    //     console.log("Error", e);
    //   });
    getCharacters();
  }, []);

  // _marvelService.GetCharacter("1010870");
  // _marvelService.GetComicsByCharacterId("1010870");
  return (
    <div className="App">
      {characters.map((character) => {
        return <HeroCard key={character.id} character={character}></HeroCard>;
      })}
    </div>
  );
}

export default App;
