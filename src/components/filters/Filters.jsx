import FilterCharacter from "./FilterCharacter";
import FilterHome from "./FilterHome";
import PropTypes from "prop-types";

function Filters({ filterCharacters, handleFilter }) {
  return (
    <form className="filters">
      <FilterCharacter
        filterCharacters={filterCharacters}
        handleFilter={handleFilter}
      />

      <FilterHome handleFilter={handleFilter} />
    </form>
  );
}

Filters.propTypes = {
  filterCharacters: PropTypes.string,
  handleFilter: PropTypes.func,
};

export default Filters;
