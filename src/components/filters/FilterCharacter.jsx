/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";

function FilterCharacter({ filterCharacters, handleFilter }) {

   // AL PULSAR ENTER EVITA EL ENVIO DEL FORMULARIO //
  const handleKeyEnter = (event) => {
    if(event.key==="Enter"){
      event.preventDefault();
    }
  };
  // AL PULSAR EN EL INPUT LLAMA A LA FUNCION Y LE PASA SU VALOR //
  const handleInputCharacters = (event) => {
    handleFilter("character", event.currentTarget.value);
  };

  return (
    <label className="filters__character" htmlFor="character">

      <span className="filters__title">Character's name: </span>
      
      <input
        className="filters__box"
        type="text"
        id="character"
        name="character"
        placeholder="Ej: Hermione"
        value={filterCharacters}
        onInput={handleInputCharacters}
        onKeyDown={handleKeyEnter}
      />
    </label>
  );
}
FilterCharacter.propTypes = {
  filterCharacters: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default FilterCharacter;
