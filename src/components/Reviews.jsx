import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from '../pages/movieDetails/movieDetails.module.css';
const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const apiKey = '3af213f4135af108020907fe62a17696';

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${apiKey}`;

    fetch(url)
      .then(res => res.json())
      .then(data => setReviews(data.results))
      .catch(err => console.error('error:', err));
  }, [movieId, apiKey]);

  return (
    <div className={css.containerReviews}>
      {reviews.length > 0 ? (
        <ul className={css.listReviews}>
          {reviews.map(review => (
            <li className={css.itemReviews} key={review.id}>
              <h4 className={css.authorReviews}>Author: {review.author}</h4>
              <p className={css.contentReviews}>{review.content}</p>
            </li>
          ))}{' '}
        </ul>
      ) : (
        <p className={css.notification}>
          Sorry, there are no reviews for this film yet.
        </p>
      )}
    </div>
  );
};
export default Reviews;
