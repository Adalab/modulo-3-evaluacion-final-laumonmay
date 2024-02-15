import "../scss/App.scss";
import { useState, useEffect } from "react";

import Header from "./Header";
import Filters from "./filters/Filters";
import Gallery from "./gallery/Gallery";

import { fetchCharacters } from "../services/fetch";

function App() {
  // 1. VARIABLES DE ESTADO:

  const [dataCharacters, setDataCharacters] = useState([]);

  const [filterHome, setFilterHome] = useState("Gryffindor");
  const [filterCharacters, setFilterCharacters] = useState("");

  // 2.USE-EFFECT:

  useEffect(() => {
    fetchCharacters().then((data) => {
      setDataCharacters(data);
    });
  }, []);

  // 3. FUNCIONES HANDLE:
  const handleFilter = (filterType, value) => {
    if (filterType === "home") {
      setFilterHome(value);
    } else if (filterType === "character") {
      setFilterCharacters(value);
    }
  };
  // 4. VARIABLES DE HTML:
  const filteredGallery = dataCharacters
    .filter((character) =>
      character.name.toLowerCase().includes(filterCharacters.toLowerCase())
    )
    .filter((character) => {
      if (filterHome === "Todas") {
        return dataCharacters;
      } else {
        return filterHome === character.house;
      }
    });
  // 5. RETURN CON EL HTML:
  return (
    <div className="app">
      <Header />
      <main>
        <Filters
          filterCharacters={filterCharacters}
          handleFilter={handleFilter}
        />

        <Gallery dataCharacters={filteredGallery} />
      </main>
    </div>
  );
}

export default App;
