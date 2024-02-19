import PropTypes from "prop-types";

function FilterHome({ handleFilter }) {
  const handleInputHome = (event) => {
    handleFilter("home", event.currentTarget.value);
  };

  return (

    <label className="filters__home" htmlFor="home">
      <span className="filters__title">Select a house:</span>
      <select
        className="filters__box"
        name="home"
        id="home"
        onInput={handleInputHome}
      >
        <option value="Gryffindor">Gryffindor</option>
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
};

export default FilterHome;
