import FilterCharacter from './FilterCharacter';
import FilterHome from './FilterHome';
import PropTypes from 'prop-types';

function Filters({filterCharacters,handleFilterCharacters}) {



    return (
        <form className="filters">
          
          <FilterCharacter 
          filterCharacters={filterCharacters}
          handleFilterCharacters={handleFilterCharacters}/>

          <FilterHome/>
          
        </form>
    );
}

Filters.propTypes = {

filterCharacters: PropTypes.string,
handleFilterCharacters: PropTypes.func.isRequired,
}

export default Filters;