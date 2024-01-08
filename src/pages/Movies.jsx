// пошук по назві фільма та відображення інфо про фільм
import { useSearchParams } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [value, setVale] = useState(searchParams.get('movieName') || '');
  const [files, setFiles] = useState([]);

  const movieName = searchParams.get('movieName') ?? '';
  const handleSearch = () => {
    setSearchParams({ movieName: value });
    if (!value) {
      setFiles([]);
      return;
    }
  };

  // const handleChange = e => {
  //   setInputData(e.currentTarget.value.toLowerCase());
  // };
  const handleSubmit = e => {
    e.preventDefault();
    if (inputData === '') {
      alert('Please, enter something to search');
      return;
    }
    onSubmit(inputData);
    setInputData('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={e => setSearchParams({ name: e.target.value })}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Movies;
