function Filters() {

    return (
        <form className="filters">
          <label className="filters__character" htmlFor="">
            <span className="filters__title">Buscar por personaje:</span>
            <input className="filters__box" type='text' id='' name='' placeholder='Ej: Hermione'/>
          </label>

          <label className="filters__home" htmlFor="">
            <span className="filters__title">Selecciona una casa:</span>
            <select className="filters__box" name= '' id= ''>
              <option value= 'Gryffindor'>Gryffindor</option>
              <option value= 'Hufflepuff'>Hufflepuff</option>
              <option value= 'Ravenclaw'>Ravenclaw</option>
              <option value= 'Slytherin'>Slytherin</option>
            </select>
          </label>
        </form>
    );
}

export default Filters;