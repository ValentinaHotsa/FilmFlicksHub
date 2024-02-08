import { useLocation, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import css from './movieDetails.module.css';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
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

  const releaseYear = movieDetails.release_date
    ? movieDetails.release_date.substring(0, 4)
    : '';
  const vote = movieDetails.vote_average
    ? movieDetails.vote_average.toFixed(1)
    : '';

  return (
    <section className={css.infoContainer}>
      <NavLink to={backLinkHref}>
        <button className={css.button}>Back</button>
      </NavLink>
      <div className={css.containerMovieDetails}>
        <h2 className={css.titleMovie}>
          {movieDetails.title} ({releaseYear})
        </h2>
        <p>User Score: {vote}</p>
        <div className={css.containerImgInfo}>
          {movieDetails.poster_path && (
            <img
              className={css.movieImg}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          )}

          <div className={css.containerInfo}>
            <b className={css.genresTitle}>
              Genres:
              <div className={css.genre}>
                {movieDetails.genres &&
                  movieDetails.genres.map(genre => (
                    <b key={genre.id} className={css.genresItem}>
                      {genre.name}
                    </b>
                  ))}
              </div>{' '}
            </b>
            <p className={css.overview}>{movieDetails.overview}</p>
            <div className={css.containerListMore}>
              <ul className={css.listMore}>
                <li className={css.itemMore}>
                  <NavLink
                    to="cast"
                    state={{ from: backLinkHref }}
                    className={css.linkInfo}
                  >
                    Cast
                  </NavLink>
                </li>
                <li className={css.itemMore}>
                  <Link
                    to="reviews"
                    state={{ from: backLinkHref }}
                    className={css.linkInfo}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </section>
  );
};
export default MovieDetails;
