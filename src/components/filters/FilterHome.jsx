import PropTypes from "prop-types";

function FilterHome({ handleFilter, filterHome }) {
  const handleInputHome = (event) => {
    handleFilter("home", event.currentTarget.value);
  };

  return (
    <label className="filters__home" htmlFor="home">
      <span className="filters__title">Selecciona una casa:</span>
      <select
        className="filters__box"
        name="home"
        id="home"
        onInput={handleInputHome}
      >
        <option value={filterHome}>Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Todas">Todas</option>
      </select>
    </label>
  );
}

FilterHome.propTypes = {
  handleFilter: PropTypes.func,
  filterHome: PropTypes.string,
};

export default FilterHome;
