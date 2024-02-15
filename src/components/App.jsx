import '../scss/App.scss'
import { useState, useEffect } from 'react';

import Header from './Header'
import Filters from './filters/Filters'
import Gallery from './gallery/Gallery'

import { fetchCharacters } from '../services/fetch'

function App() {

  // 1. VARIABLES DE ESTADO:

    const [ dataCharacters, setDataCharacters ] = useState( [] );
    const [ filterCharacters, setFilterCharacters ] = useState( "" );

  



  // 2.USE-EFFECT:

  useEffect (() => {

    fetchCharacters ()
      .then(data => {
        setDataCharacters(data)
        
      });


  },  [] );

  // 3. FUNCIONES HANDLE:

  const handleFilterCharacters = (value) => {

    setFilterCharacters(value)
  };


  // 4. VARIABLES DE HTML:

  const FilteredCharacters = dataCharacters.filter((character) => character.name.toLowerCase().includes(filterCharacters.toLowerCase())
  );


  // 5. RETURN CON EL HTML:
  return (
    <div className="app">
      <Header/>

      <main>
        <Filters 
        filterCharacters={filterCharacters} 
        handleFilterCharacters={handleFilterCharacters}
        />

        <Gallery dataCharacters={FilteredCharacters}/>
      </main>
     
    </div>
  )
}

export default App
