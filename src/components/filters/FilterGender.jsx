import PropTypes from 'prop-types';

function FilterGender({handleFilter, filterGender}) {


    const handleChangeGender = (event) => {

        handleFilter("gender", event.currentTarget.value);
    };
    return (
      <div className='gender'>
        <label className= "gender__option" htmlFor="female">
        <i className="fa-solid fa-venus icon"></i><span className="gender__title">Female</span>
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
        
        <label htmlFor="male">
        <i className="fa-solid fa-mars icon"></i><span className="gender__title"> Male</span>
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
      
      </div>
    );
}

FilterGender.propTypes = {
    handleFilter: PropTypes.func,
    filterGender: PropTypes.string,
};

export default FilterGender;