// пошук по назві фільма та відображення інфо про фільм
import { useLocation, useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [value, setValue] = useState(searchParams.get('query') || '');
  const [files, setFiles] = useState([]);
  const query = searchParams.get('query') ?? '';
  const apiKey = '3af213f4135af108020907fe62a17696';
  const location = useLocation();
  // const handleSearch = () => {
  //   setSearchParams({ query: value });
  //   if (!value) {
  //     setFiles([]);
  //     return;
  //   }
  // };

  const handleChange = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setFiles(data.results))
      .catch(err => console.error('error:', err));
  }, [apiKey, query]);

  const handleSubmit = e => {
    e.preventDefault();
    if (query === '') {
      alert('Please, enter something to search');
      return;
    }
  };
  return (
    <div className={css.searchContainer}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.searchInput}
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search movies"
          autoFocus
        />
        {/* <button type="submit">Search</button> */}
      </form>
      <div className={css.listContainer}>
        <ul className={css.searchList}>
          {''}
          {files.map(file => (
            <li key={file.id}>
              <Link
                className={css.searchLink}
                to={`/movies/${file.id}`}
                state={{ from: location }}
              >
                {file.poster_path && (
                  <div>
                    <img
                      className={css.img}
                      src={`https://image.tmdb.org/t/p/w200${file.poster_path}`}
                      alt={file.title}
                    />
                  </div>
                )}
                {file.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Movies;
