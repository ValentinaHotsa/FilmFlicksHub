import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
  console.log(reviews);
  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h4>Author: {review.author}</h4>
              <p>{review.content}</p>
            </li>
          ))}{' '}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};
export default Reviews;
