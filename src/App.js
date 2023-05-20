import "./App.css";
import { getAllData, sortByAge, sortByName } from "./dummy-data";
import { useState } from "react";
import PeopleList from "./components/PeopleList";

function App() {
  const data = getAllData();

  const [list, setList] = useState(data);

  const handleSortByAge = () => {
    const array = sortByAge();
    setList(array);
  };

  const handleSortByName = () => {
    const array = sortByName();
    setList(array);
  };

  const resetButton = () => {
    const rawData = getAllData();
    setList(rawData);
  };

  return (
    <div className="App">
      <h1>array practice</h1>
      <button onClick={handleSortByAge}>sortByAge</button>
      <button onClick={handleSortByName}>sortByName</button>
      <button onClick={resetButton}>reset</button>
      <PeopleList data={list} />
    </div>
  );
}

export default App;
