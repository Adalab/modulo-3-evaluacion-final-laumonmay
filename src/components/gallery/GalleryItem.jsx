import PropTypes from "prop-types";

function GalleryItem({ character }) {
  return (
    <div className="gallery__b">
    
      
      <figcaption className="gallery__a">
        <img
            className="gallery__image"
            src={character.image}
            alt={character.name}
        />
      </figcaption>
      
           
      <img className="gallery__frame" src="public\CARA_A.png" alt="" /> 


      
      {/* <div className="gallery__text">
        <h3 className="gallery__character">{character.name}</h3>
        <span className="gallery__info">{character.species}</span>
      </div> */}
    </div>
    
  );
}

GalleryItem.propTypes = {
  character: PropTypes.object.isRequired,
};

export default GalleryItem;
