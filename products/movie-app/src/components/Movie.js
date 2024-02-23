import PropTypes from 'prop-types';

function Movie({
  propCover_image,
  propTitle,
  propSummary,
  propGenres,
}) {
  return (
    <div>
      <img src={propCover_image} alt={propTitle} />
      <h1>{propTitle}</h1>
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
};
export default Movie;
