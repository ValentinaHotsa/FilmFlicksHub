import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import css from './sharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div className={css.mainContainer}>
      {/* <div className={css.containerSpot1}>
        <svg className={css.spot1} width="100" height="100" fill="white">
          <use href="../../vectors/Vector1.svg"></use>
        </svg>
      </div> */}
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
