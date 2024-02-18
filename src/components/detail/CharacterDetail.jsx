import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

import Gryffindor from "../images/Griffindor.png";
import Hufflepuff from "../images/Hufflepuff.png";
import Ravenclaw from "../images/Ravenclaw.png";
import Slytherin from "../images/Slytherin.png";


function CharacterDetail({ findCharacter }) {
  const params = useParams();

  const dataCharacters = findCharacter(params.id);
  console.log(dataCharacters);

  if (dataCharacters === undefined) {
    return <div className="characterDetail">No existe ese personaje</div>;
  }

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

  

  return (
    <section className="chromeDetail">
      <div className="chromeFrame">

        <div className="chromeEnds">
          <h3 className="chromeEnds__name">{dataCharacters.name}</h3>
          <span className="chromeEnds__gender">{dataCharacters.gender}</span>
        </div>


        <figcaption className="image">
          <img
            className="image__img"
            src={dataCharacters.image}
            alt={dataCharacters.name}
          />
          <span className="specie">{dataCharacters.species}</span>
        </figcaption>


        <figcaption>
          <img 
          className="shield" 
          src={dataCharacters.house || houseShield} 
          alt={dataCharacters.house}  
          />
          
        </figcaption>

        <span ></span>

        <p>
          <span className="detail__birth">{dataCharacters.dateOfBirth}</span>
        </p>


        <span className="detail__info">{dataCharacters.alternate_name}</span>

        <div className="chromeEnds">
          <span className="chromeEnds__status">{dataCharacters.alive}♥</span>
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