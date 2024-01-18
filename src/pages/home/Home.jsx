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
      <section className={css.hero}>
        <div>
          <img src="../../vectors/Vector11.png" alt="" />
        </div>
        <h1 className={css.titlePage}>Films, series, cartoons in one place!</h1>
        <p className={css.aboutPage}>
          Have you always wanted to know about the latest news in the world of
          cinema? Want to learn about trends? Find out more about this or that
          film? Then this site is for you.
        </p>
      </section>
      <section className={css.mainSection}>
        <h2 className={css.homeListTitle}>Trending today</h2>
        <ul className={css.homeList}>
          {''}
          {movies.map(movie => (
            <li key={movie.id} className={css.homeItem}>
              <Link
                to={`movies/${movie.id}`}
                state={{ from: location }}
                className={css.homeLink}
              >
                {movie.poster_path && (
                  <div className={css.homeImgContainer}>
                    <img
                      className={css.homeImg}
                      src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                      alt={movie.title}
                    />
                    <p className={css.homeMovieTitle}>{movie.title}</p>
                  </div>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
export default Home;
