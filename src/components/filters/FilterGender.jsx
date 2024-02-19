import PropTypes from 'prop-types';

function FilterGender({handleFilter, filterGender}) {


    const handleChangeGender = (event) => {

        handleFilter("gender", event.currentTarget.value);
    };
    return (
      <div className='filters__gender'>
        <label className= "filters__option" htmlFor="female">
        <i className="fa-solid fa-venus icon"></i><span className="filters__titleGender">Female</span>
          <input 
          className='radio'
          type="radio" 
          name="gender" 
          id="female" 
          value={"female"}
          checked={filterGender === "female"}
          onChange={handleChangeGender}
          />
        </label>
        
        <label className= "filters__option"  htmlFor="male">
        <i className="fa-solid fa-mars icon"></i><span className="filters__titleGender"> Male</span>
          <input 
          className='radio'
          type="radio"
          name="gender"
          id="male" 
          value={"male"}
          checked={filterGender === "male"}
          onChange={handleChangeGender}
          />
        </label>

        <label className= "filters__option"  htmlFor="all">
        <i className="fa-solid fa-venus-mars icon"></i><span className="filters__titleGender"> All</span>
          <input 
          className='radio'
          type="radio"
          name="gender"
          id="all" 
          value={"all"}
          checked={filterGender === "all"}
          onChange={handleChangeGender}
          />
        </label>
      
      </div>
    );
}

FilterGender.propTypes = {
    handleFilter: PropTypes.func,
    filterGender: PropTypes.string,
};

export default FilterGender;