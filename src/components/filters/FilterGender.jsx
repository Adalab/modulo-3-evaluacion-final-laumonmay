import PropTypes from 'prop-types';

function FilterGender({handleFilter, filterGender}) {


    const handleChangeGender = (event) => {

        handleFilter("gender", event.currentTarget.value);
    };
    return (
      <div>

        <input 
        type="radio" 
        name="gender" 
        id="female" 
        value={"female"}
        checked={filterGender === "female"}
        onChange={handleChangeGender}
        />

        <label htmlFor="female">Female</label>

        <input 
        type="radio"
        name="gender"
        id="male" 
        value={"male"}
        checked={filterGender === "male"}
        onChange={handleChangeGender}
        />

        <label htmlFor="male">Male</label>
      </div>
    );
}

FilterGender.propTypes = {
    handleFilter: PropTypes.func,
    filterGender: PropTypes.string,
};

export default FilterGender;