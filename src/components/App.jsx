import "../scss/App.scss";
import { useState, useEffect } from "react";
import { fetchCharacters } from "../services/fetch";
import lStorage from "../services/localStorage";
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Filters from "./filters/Filters";
import Gallery from "./gallery/Gallery";
import CharacterDetail from "./detail/CharacterDetail";

function App() {
  // 1. VARIABLES DE ESTADO:
  //=============================================
  const [dataCharacters, setDataCharacters] = useState(
    lStorage.get("characters", [])
  ); // valor inicial coge lo que hay en lStorage.character y sino el array vacio

  const [filterHome, setFilterHome] = useState("Gryffindor");
  const [filterCharacters, setFilterCharacters] = useState("");
  const [filterGender, setFilterGender] = useState("female");

  // 2.USE-EFFECT:
  //=============================================

  useEffect(() => {
    if (!lStorage.includes("characters")) { // si en lStorage no existe la variable characters...
    
      fetchCharacters() // hacer el fetch
        .then((data) => { // y cuando tenga data, quiero:
          setDataCharacters(data); // 1º guardar data en setDataCharacters
          lStorage.set("characters", data); // 2º crear en lStorage la var characters y que se guarte data.
        });
    }
  }, []);
  

  // 3. FUNCIONES HANDLE:
  //=============================================

  // FUNCION RECOGER VALORES DE LOS FILTROS //

  const handleFilter = (filterType, value) => {
    if (filterType === "home") {
      setFilterHome(value);
      
    } 
    else if (filterType === "character") {
      setFilterCharacters(value);
    }
    else if (filterType === "gender") {
      setFilterGender(value);
    }
  };

  

  // 4. VARIABLES DE HTML:
  //=============================================


  // FILTROS DE BÚSQUEDA //

  const filteredGallery = dataCharacters

    .filter((character) => character.name.toLowerCase().includes(filterCharacters.toLowerCase())) // filtro por perSonaje
    .filter((character) => character.gender === filterGender)

    .filter((character) => {  //filtro por casa
    
      if (filterHome === "Todas") {
        return dataCharacters;
      } else {
        return filterHome === character.house;
      }
      })
    

  // ORDEN ALFABÉTICO //

  const OrderFilteredGallery = [...filteredGallery].sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  const findCharacter = (id) => {
    return dataCharacters.find((character) => character.id === id);
  };
  // 5. RETURN CON EL HTML:
  //=============================================
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  handleFilter={handleFilter}
                  filterCharacters={filterCharacters}
                  filterGender={filterGender}
                />
                <Gallery dataCharacters={OrderFilteredGallery} />
              </>
            }
          />

          <Route
            path="/character/:id"
            element={<CharacterDetail findCharacter={findCharacter} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
