import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({
  propCover_image,
  propTitle,
  propSummary,
  propGenres,
  propGId,
}) {
  return (
    <div>
      <img src={propCover_image} alt={propTitle} />
      <h1>
        {' '}
        <Link to={`/movie/${propGId}`}>{propTitle}</Link>
      </h1>
      <p>{propSummary}</p>
      <ul>
        {propGenres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
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
