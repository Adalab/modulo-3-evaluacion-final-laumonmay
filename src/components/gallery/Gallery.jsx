import GalleryItem from "./GalleryItem";
import PropTypes from "prop-types";

function Gallery({ dataCharacters }) {

  if (dataCharacters.length === 0) {
    //si el array "datacharacter" es vacio
    return(
      <div className="error">
      <h3 className="error__text">- This character does not exist -</h3>
      <img className="error__img"
        src="https://img.wattpad.com/19ce27a4991318c598ea40c231bfab669fa82c11/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7a71656c576f4161622d4c6250773d3d2d3837313338343835382e313633633836333230646466643532373231303639303034303139322e676966"
        alt=""
      />
    </div>
    )
  
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
