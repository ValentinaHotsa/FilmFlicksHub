import { Suspense, lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Loader from './loader/Loader';

const Home = lazy(() => import('../pages/home/Home'));
const Movies = lazy(() => import('../pages/moviesList/Movies'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));
const MovieDetails = lazy(() => import('../pages/movieDetails/MovieDetails'));
const SharedLayout = lazy(() => import('./sharedLayout/SharedLayout'));

export const App = () => {
  const location = useLocation();

  let rootClass = '';
  if (location.pathname === '/') {
    rootClass = 'home-bg';
  } else if (location.pathname.startsWith('/movies')) {
    rootClass = 'second-page-bg';
  }
  return (
    <div id="root" className={rootClass}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />}></Route>
              <Route path="reviews" element={<Reviews />}></Route>
            </Route>
            <Route path="*" element={<h1>Error</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};
