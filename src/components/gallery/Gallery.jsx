import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";

function Gallery({ dataCharacters }) {

  if (dataCharacters.length === 0) { //si el array "datacharacter" es vacio
    return <h3 className='error'>Este personaje no existe </h3>
   }

  const htmlGallery = dataCharacters.map((character) => {
    return (
      <li key={character.id} className="gallery__li">
        <GalleryItem character={character} />
      </li>
    );
  });

  return <ul className="gallery">{htmlGallery}</ul>;
}

Gallery.propTypes = {
  dataCharacters: PropTypes.array.isRequired,
};

export default Gallery;
