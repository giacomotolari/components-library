import "./App.scss";
import DetailListInput from "./components/detailsListInput/DetailListInput";

function App() {
  // const list = [
  //   "item 1",
  //   "item 2",
  //   "item 3",
  //   "item 4",
  //   "item 5",
  //   "item 6",
  //   "item 7",
  // ];
  return (
    <div className="App">
      <DetailListInput placeholder="search" /*list={list}*/ />
    </div>
  );
}

export default App;
