import "./App.scss";
import DetailListInput from "./components/detailListInput/DetailListInput";

function App() {
  const pokemonList = ["pichaku", "pokemon2", "pokemon3", "pokemon4"];
  return (
    <div className="App">
      <DetailListInput placeholder="select pokemon" list={pokemonList} />
    </div>
  );
}

export default App;
