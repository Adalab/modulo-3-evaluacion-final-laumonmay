import PropTypes from "prop-types";

function FilterCharacter({ filterCharacters, handleFilter }) {

  const handleKeyEnter = (event) => {
    if(event.key==="Enter"){
      event.preventDefault();
    }
  };

  const handleInputCharacters = (event) => {
    handleFilter("character", event.currentTarget.value);
  };

  return (
    <label className="filters__character" htmlFor="character">
      <span className="filters__title">Buscar por personaje:</span>
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
