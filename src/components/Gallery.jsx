import GalleryItem from "./GalleryItem";

function Gallery() {

    return (
        <ul className="gallery">

          <li className="gallery__card">
            <GalleryItem 
            web="https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg"
            character="Harry Potter"
            info= "Human"/>
          </li>

          <li className="gallery__card">
            <GalleryItem 
            web="https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg"
            character="Hermione"
            info= "Human"/>
          </li>
          
          <li className="gallery__card">
            <GalleryItem 
            web="https://media.revistavanityfair.es/photos/60e84a97bb9e71d46fd8d1f4/1:1/w_916,h_916,c_limit/39713.jpg"
            character="Hagrid"
            info= "Human"/>
          </li>
        </ul>
    );
}

export default Gallery;