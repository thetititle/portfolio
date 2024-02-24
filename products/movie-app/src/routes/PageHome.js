import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Movie from '../components/Movie';
import Loading from '../components/Loading';
import Style from '../css/PageHome.module.css';

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
        <div className={Style.loadingWrap}>
          <Loading />
        </div>
      ) : (
        <div>
          <Header />
          <div className={Style.bannerWrap}></div>
          <div className={Style.container}>
            <div className={Style.movieList}>
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
          </div>
        </div>
      )}
    </div>
  );
}
export default PageHome;
