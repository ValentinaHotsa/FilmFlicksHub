import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Loader from 'components/loader/Loader';
import css from './sharedLayout.module.css';
import img from '../../assets/filmflickshub-high-resolution-logo-transparent.png';

const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <img className={css.logo} src={img} alt="logo"></img>

        <nav className={css.nav}>
          <NavLink to="/" className={css.navLink}>
            Home
          </NavLink>
          <NavLink to="/movies" className={css.navLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
