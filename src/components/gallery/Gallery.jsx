import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";

function Gallery ({ dataCharacters }) {

  const htmlGallery = dataCharacters.map((character) => {

    return(
    <li key={character.id} className="gallery__card">

      <GalleryItem character={character}/>
      
    </li>
    );
  });

  return <ul className="gallery">{htmlGallery}</ul>;
}

Gallery.propTypes = {
  dataCharacters: PropTypes.array.isRequired
};

export default Gallery;
