import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './sharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.mainContainer}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link to="/" className={css.navLink}>
            Home
          </Link>
          <Link to="/movies" className={css.navLink}>
            Movies
          </Link>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
