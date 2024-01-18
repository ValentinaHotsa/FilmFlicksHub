import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../pages/movieDetails/movieDetails.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  useEffect(() => {
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWYyMTNmNDEzNWFmMTA4MDIwOTA3ZmU2MmExNzY5NiIsInN1YiI6IjY1OWI5Zjc3YmQ1ODhiMjA5OThkMjU0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nhVy7DUa-03q9UhnqfFekYC87ll43BYobHKSzDzzByk',
      },
    };

    fetch(url, options)
      .then(res => res.json())
      .then(data => setMovieCast(data.cast))
      .catch(err => console.error('error:' + err));
  }, [movieId]);

  return (
    <div className={css.containerCast}>
      <ul className={css.listCast}>
        {movieCast.map(actor => (
          <li className={css.itemCast} key={actor.cast_id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className={css.imgCast}
              />
            ) : (
              <p className={css.notificationImg}>No image</p>
            )}
            <div className={css.containerName}>
              <h4 className={css.nameCast}>Actor: {actor.name}</h4>
              <p className={css.characterCast}>Character: {actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
