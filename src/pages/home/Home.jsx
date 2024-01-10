// сьогоднішні тренди
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './home.module.css';

const Home = () => {
  const location = useLocation();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // const API_KEY = '3af213f4135af108020907fe62a17696';

    const fetch = require('node-fetch');

    const url =
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
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
      .then(data => setMovies(data.results))
      .catch(err => console.error('error:' + err));
  }, []);

  return (
    <main className={css.mainContainer}>
      <h1>Trending today</h1>
      <ul className={css.homeList}>
        {''}
        {movies.map(movie => (
          <li key={movie.id}>
            <Link
              to={`movies/${movie.id}`}
              state={{ from: location }}
              className={css.homeLink}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Home;
