import PropTypes from 'prop-types';

function FilterCharacter({filterCharacters,handleFilterCharacters}) {
    
    const handleInput = (event) => {
  
        handleFilterCharacters(event.currentTarget.value)
        
      };

    return (
        <label className="filters__character" htmlFor="character">
            <span className="filters__title">Buscar por personaje:</span>
            <input 
            className="filters__box" 
            type='text' 
            id='character' 
            name='character' 
            placeholder='Ej: Hermione'
            value={filterCharacters}
            onInput={handleInput}
            />
          </label>
    );
}
FilterCharacter.propTypes = {

    filterCharacters: PropTypes.string,
    handleFilterCharacters: PropTypes.func.isRequired,
    }
export default FilterCharacter;