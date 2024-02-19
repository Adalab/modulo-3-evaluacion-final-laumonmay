import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import Gryffindor from "../../images/Gryffindor.png";
import Hufflepuff from "../../images/Hufflepuff.png";
import Ravenclaw from "../../images/Ravenclaw.png";
import Slytherin from "../../images/Slytherin.png";
import Giphy from "../../images/giphy.gif";





function CharacterDetail({ findCharacter }) {
  const params = useParams();

  const dataCharacters = findCharacter(params.id);
 

  if (dataCharacters === undefined) {
    return <div className="characterDetail">No existe ese personaje</div>;
  }

  // Personalizar los escudos //
  let houseShield;

  if(dataCharacters.house === "Gryffindor"){
    houseShield = Gryffindor;
    
  }
  else if(dataCharacters.house === "Hufflepuff"){
    houseShield = Hufflepuff;
  }
  else if(dataCharacters.house === "Ravenclaw"){
    houseShield = Ravenclaw;
  }
  else if(dataCharacters.house === "Slytherin"){
    houseShield = Slytherin;
  }

  // Si no tiene foto que salga una determinada //

  let defaultImage;

  if (dataCharacters.image) {
    defaultImage = (
      <figcaption className="image">
        <img
          className="image__img"
          src={dataCharacters.image}
          alt={dataCharacters.name}
        />
        <span className="specie">{dataCharacters.species}</span>
      </figcaption>
    );
  } else {
    defaultImage = (
      <figcaption className="image">
        <img
          className="image__defaultImage"
          src={Giphy}
          alt={dataCharacters.name}
        />
        <span className="specie">{dataCharacters.species}</span>
      </figcaption>
    );
  }
  
  // Para poner el simbolo del género //
  let gender;

  if(dataCharacters.gender === "female"){
    gender = (
      <i className="fa-solid fa-venus"></i>
    );
  }
  else {
    gender = (
      <i className="fa-solid fa-mars"></i>
    );
  }

  // Para poner el simbolo estatus //
  
  let status;

  if(dataCharacters.alive){
    status = (
      <i className="fa-sharp fa-solid fa-heart-pulse"></i>
    );
  }
  else {
    status = (
      <i className="fa-solid fa-skull-crossbones"></i>
    );
  }
      
    
  


  return (
    <section className="chromeDetail">
      <div className="chromeFrame">

        <div className="chromeEnds">
          <h3 className="chromeEnds__name">{dataCharacters.name}</h3>
          <span className="chromeEnds__gender">{gender}</span>
        </div>


        {defaultImage}

       

        <figcaption>
          <img 
          className="shield" 
          src= {houseShield || ""} 
          />
        </figcaption>


        <span className="detail__info">{dataCharacters.alternate_name}</span>

        <div className="chromeEnds">
          <span className="chromeEnds__status">{status}</span>
          <span className="chromeEnds__actor">{dataCharacters.actor}</span>
        </div>
      </div>
    </section>
  );
}
CharacterDetail.propTypes = {
  findCharacter: PropTypes.func,
};

export default CharacterDetail;

{/* <figcaption className="detail">
  <img className="detail__card" src="./Card-B.png" alt="" />
</figcaption> */}