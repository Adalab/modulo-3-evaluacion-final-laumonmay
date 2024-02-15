import PropTypes from "prop-types";

function GalleryItem({ character }) {
  return (
    <>
      <img
        className="gallery__image"
        src={character.image}
        alt={character.name}
      />
      <div className="gallery__text">
        <h3 className="gallery__character">{character.name}</h3>
        <span className="gallery__info">{character.species}</span>
      </div>
    </>
  );
}

GalleryItem.propTypes = {
  character: PropTypes.object.isRequired,
};

export default GalleryItem;
