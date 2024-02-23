import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Style from '../css/Movie.module.css';

function Movie({
  propCover_image,
  propTitle,
  propSummary,
  propGenres,
  propGId,
}) {
  const [isHover, setHover] = useState(false);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
  };
  return (
    <div
      className={Style.movie}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <img src={propCover_image} alt={propTitle} />
      <div className={Style.movieInfo}>
        <div>
          <h1>
            <Link to={`/movie/${propGId}`}>
              {propTitle}
            </Link>
          </h1>
          <ul>
            {propGenres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
        <p>{propSummary}</p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  propCover_image: PropTypes.string.isRequired,
  propTitle: PropTypes.string.isRequired,
  propSummary: PropTypes.string.isRequired,
  propGenres: PropTypes.array.isRequired,
  propGId: PropTypes.number.isRequired,
};
export default Movie;
