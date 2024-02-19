import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


function GalleryItem({ character }) {
  let defaultImage;

  if (character.image) {
    defaultImage = (
      <figcaption className="card__figcaptionImage">
        <img
          className="card__image"
          src={character.image}
          alt={character.name}
        />
      </figcaption>
    );
  } else {
    defaultImage = (
      <figcaption className="card__figcaptionDefault">
        <img
          className="card__defaultImage"
          src="./giphy.gif"
          alt={character.name}
        />
      </figcaption>
    );
  }

  return (

      <Link to= {`/character/${character.id}`} className="Link"> 
        <div className="card">
          {defaultImage}

          <img className="card__frame" src="./Card-A.png" alt="" />

          <div className="card__text">
            <h3 className="card__character">{character.name}</h3>
            <span className="card__info">{character.species}</span>
          </div>
        </div>
      </Link>
    
  );
}

GalleryItem.propTypes = {
  character: PropTypes.object.isRequired,
};

export default GalleryItem;
