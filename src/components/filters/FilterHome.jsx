function FilterHome() {

    return (
      <label className="filters__home" htmlFor="home">
        <span className="filters__title">Selecciona una casa:</span>
        <select className="filters__box" name="home" id="home">
          <option value="Gryffindor">Gryffindor</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Slytherin">Slytherin</option>
        </select>
      </label>
    );
}

export default FilterHome;