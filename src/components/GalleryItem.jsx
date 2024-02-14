import PropTypes from 'prop-types';

function GalleryItem({web, character, info}) {
  return (
    <>
      <img
        className="gallery__image"
        src= {web}
        alt= {character}
      />
      <div className="gallery__text">
        <h3 className="gallery__character">{character}</h3>
        <span className="gallery__info">{info}</span>
      </div>
    </>
  );
}

GalleryItem.propTypes = {
web: PropTypes.string,
character: PropTypes.string,
info: PropTypes.string,

}

export default GalleryItem;