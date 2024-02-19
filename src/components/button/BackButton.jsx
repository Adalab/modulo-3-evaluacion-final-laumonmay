import { Link } from 'react-router-dom';

function BackButton() {

    return (
      <Link to="/">
        <button className="backButton">
        <i className="fa-solid fa-backward"> Back</i>
        </button>
      </Link>
    );
}

export default BackButton;