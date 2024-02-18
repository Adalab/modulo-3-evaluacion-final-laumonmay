import "../scss/App.scss";
import { useState, useEffect } from "react";
import { fetchCharacters } from "../services/fetch";
import lStorage from "../services/localStorage"
import { Route, Routes } from "react-router-dom";

import Header from "./Header";
import Filters from "./filters/Filters";
import Gallery from "./gallery/Gallery";
import CharacterDetail from "./detail/CharacterDetail";

function App() {
  // 1. VARIABLES DE ESTADO:

  const [dataCharacters, setDataCharacters] = useState(lStorage.get('characters', []));  // valor inicial coge lo que hay en lStorage.character y sino el array vacio

  const [filterHome, setFilterHome] = useState("Gryffindor");
  const [filterCharacters, setFilterCharacters] = useState("");

  // 2.USE-EFFECT:

  useEffect(() => {

    if(!lStorage.includes('characters')) { // si en lStorage no existe la variable characters...
      
      fetchCharacters() // hacer el fetch
      .then((data) => {  //y cuando tenga data, quiero:
        setDataCharacters(data);   // 1º guardar data en setDataCharacters
        lStorage.set('characters', data); // 2º crear en lStorage la var characters y que se guarte data.
      });

    }
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
    .filter((character) =>   // filtro por personaje //
      character.name.toLowerCase().includes(filterCharacters.toLowerCase())
    )
    .filter((character) => { // filtro por casa ///
      if (filterHome === "Todas") {
        return dataCharacters;
      } else {
        return filterHome === character.house;
      }
    });
  
    // listado de personajes filtrados ordenados alfabeticamente / ordena el array ya filtrado //

  const OrderFilteredGallery =[...filteredGallery].sort((a,b) =>{
    return a.name.localeCompare(b.name);
  })

  const findCharacter = (id) => {
    return dataCharacters.find(character => character.id === id);
  }
  // 5. RETURN CON EL HTML:
  return (
    <div className="app">
      <Header />
      <main>

        <Routes>
          
          <Route path= '/' element = {
            <>
              <Filters
              filterCharacters={filterCharacters}
              handleFilter={handleFilter}
              
              />
              <Gallery 
              dataCharacters={OrderFilteredGallery}
              />
            </>
          }/>

         
          <Route path= '/character/:id' element = {<CharacterDetail findCharacter={findCharacter}/>} />
          

        </Routes>




      </main>
    </div>
  );
}

export default App;


