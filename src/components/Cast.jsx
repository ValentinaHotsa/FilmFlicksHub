import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
  console.log(movieCast);
  return (
    <div>
      <ul>
        {movieCast.map(actor => (
          <li key={actor.cast_id}>
            {actor.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
              />
            ) : (
              <p>No image</p>
            )}
            <h4>Actor: {actor.name}</h4>
            <p>Character: {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cast;
