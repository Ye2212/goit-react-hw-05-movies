import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/api';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(null);
  const movieId = useParams();
  useEffect(() => {
    fetchMoviesReviews(movieId)
      .then(r => console.log(r.results))
      .then(setReviews);
  }, [movieId]);

  return <h2> Reviews </h2>;
}
