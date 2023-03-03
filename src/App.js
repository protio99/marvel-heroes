import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";

function App() {
  // const [characters, setCharacters] = useState([]);

  // async function getCharacters() {
  //   const response = await _marvelService.GetCharacters();
  //   console.log(response);
  //   setCharacters(response.data.data.results);
  // }
  // useEffect(() => {
  //   getCharacters();
  // }, []);

  // _marvelService.GetCharacter("1010870");
  // _marvelService.GetComicsByCharacterId("1010870");
  return (
    <BrowserRouter>
      <Link to="/"></Link>
      <Link to="/"></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" />
      </Routes>
    </BrowserRouter>
    // <div className="App">
    //   {characters.map((character) => {
    //     return <HeroCard key={character.id} character={character}></HeroCard>;
    //   })}
    // </div>
  );
}

export default App;
