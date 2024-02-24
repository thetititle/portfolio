import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Style from '../css/PageDetail.module.css';

function PageDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const jsonData = await response.json();
      setMovie(jsonData.data.movie);
    }
    getData();
  }, [id]);
  console.log(movie);
  return (
    <div className={Style.container}>
      <img src={movie.background_image} alt={movie.title} />
      <h1>{movie.title}</h1>
    </div>
  );
}
export default PageDetail;
