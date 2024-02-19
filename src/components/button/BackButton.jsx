import { Link } from 'react-router-dom';

function BackButton() {

    return (
      <Link className="linkM" to="/">
        <button className="linkM__btn">
        <i className="fa-solid fa-backward"> Back</i>
        </button>
      </Link>
    );
}

export default BackButton;