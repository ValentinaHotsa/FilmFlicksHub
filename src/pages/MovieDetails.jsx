import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
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
      .then(data => setMovieDetails(data))
      .catch(err => console.error('error:' + err));
  }, [movieId]);
  // console.log(movieDetails);
  const releaseYear = movieDetails.release_date
    ? movieDetails.release_date.substring(0, 4)
    : '';
  const vote = movieDetails.vote_average
    ? movieDetails.vote_average.toFixed(1)
    : '';

  return (
    <div>
      <h2>
        {movieDetails.title} ({releaseYear})
      </h2>
      <p>User Score: {vote}</p>
      {movieDetails.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
        />
      )}

      <div>
        <p>Genres: </p>
        <ul>
          {movieDetails.genres &&
            movieDetails.genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
        </ul>
      </div>
      <p>{movieDetails.overview}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
