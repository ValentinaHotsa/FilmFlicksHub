import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <div className={css.loader}></div>
    </div>
  );
};

export default Loader;
