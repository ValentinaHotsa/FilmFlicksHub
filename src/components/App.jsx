import { Route, Routes, Link } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from '../pages/Movies';
import Cast from './Cast';
import Reviews from './Reviews';
import { MovieDetails } from '../pages/MovieDetails';

export const App = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
          <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
};
