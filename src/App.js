import "./App.css";
import MarvelService from "./services/MarvelService";

const _marvelService = new MarvelService();
function App() {
  _marvelService.GetCharacters();
  _marvelService.GetCharacter("1010870");
  _marvelService.GetComicsByCharacterId("1010870");
  return <div className="App"></div>;
}

export default App;
