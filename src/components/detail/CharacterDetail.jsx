import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

function CharacterDetail({ findCharacter }) {
  const params = useParams();

  const dataCharacters = findCharacter(params.id);
  console.log(dataCharacters);

  if (dataCharacters === undefined) {
    return <div className="characterDetail">No existe ese personaje</div>;
  }

  

  return (
    <div className="characterDetail">
      <figcaption>
        <img
          className="detail__image"
          src={dataCharacters.image}
          alt={dataCharacters.name}
        />
      </figcaption>

      <h3 className="detail__character">- {dataCharacters.name} -</h3>
      <span className="detail__birth">{dataCharacters.dateOfBirth}</span>


      <div className="detail__text">
        
        <span className="detail__info">- House: {dataCharacters.house}</span>
        
        
        <span className="detail__info">- Specie: {dataCharacters.species}</span>
    
        <span className="detail__info">- Gender: {dataCharacters.gender}</span>
        
        <span className="detail__info">- Alternates names: {dataCharacters.alternate_name}</span>
        
        <span className="detail__info">- Status: {dataCharacters.alive}</span>
      </div>
    </div>
  );
}
CharacterDetail.propTypes = {
  findCharacter: PropTypes.func,
};

export default CharacterDetail;

{/* <figcaption className="detail">
  <img className="detail__card" src="./Card-B.png" alt="" />
</figcaption> */}