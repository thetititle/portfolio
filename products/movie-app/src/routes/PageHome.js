import { useState, useEffect } from 'react';
import Movie from '../components/Movie';

function PageHome() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year'
      )
    ).json();
    const movies = json.data.movies;
    setMovies(movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>now Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              propCover_image={movie.medium_cover_image}
              propTitle={movie.title}
              propSummary={movie.summary}
              propGenres={movie.genres}
              propGId={movie.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default PageHome;
