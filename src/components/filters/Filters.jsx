import FilterCharacter from "./FilterCharacter";
import FilterGender from "./FilterGender";
import FilterHome from "./FilterHome";
import PropTypes from "prop-types";

function Filters({handleFilter, filterCharacters, filterGender}) {
  return (
    <form className="filters">
      <FilterCharacter
        handleFilter={handleFilter}
        filterCharacters={filterCharacters}
      />

      <FilterHome 
        handleFilter={handleFilter} 
      />

      <FilterGender 
        handleFilter={handleFilter} 
        filterGender={filterGender}
      />

    </form>
  );
}

Filters.propTypes = {
  handleFilter: PropTypes.func,
  filterCharacters: PropTypes.string,
  filterGender: PropTypes.string,
};

export default Filters;
