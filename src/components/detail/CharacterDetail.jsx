import PropTypes from 'prop-types';

function CharacterDetail({dataCharacters}) {

    console.log(dataCharacters.name);

    return (
      <div className="characterDetail">
        <figcaption className="detail">
          <img className="detail__card" src="./Card-B.png" alt="" />
        </figcaption>

        <div className="detail__text">
          <h3 className="detail__character">{dataCharacters.name}</h3>
          <span className="detail__info">{dataCharacters.dateOfBirth}</span>
          <span className="detail__info">{dataCharacters.house}</span>
          <span className="detail__info">{dataCharacters.alive}</span>
          <span className="detail__info">{dataCharacters.actor}</span>
        </div>
        <p></p>
      </div>
    );
}
CharacterDetail.propTypes = {

dataCharacters: PropTypes.array,

}

export default CharacterDetail;