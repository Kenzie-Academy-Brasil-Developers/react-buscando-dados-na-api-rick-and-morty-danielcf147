import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./Components/Characters";

function App() {
  const [charactersList, setCharactersList] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => setCharactersList(res.results))
      .catch((err) => console.log(err));
  }, []);
  console.log(charactersList);
  return (
    <div className="container">
      <h1>Meus Personagens</h1>
      <div className="middle">
        <Characters charactersList={charactersList} />
      </div>
    </div>
  );
}

export default App;
