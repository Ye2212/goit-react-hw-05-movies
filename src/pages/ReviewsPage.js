import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/api';
import Reviews from 'components/Reviews/Reviews';

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesReviews(movieId).then(r => {
      const mappedReviews = [];
      r.results.map(({ author, content, id }) => {
        const authorReview = {
          id: id,
          author: author,
          review: content,
        };
        return mappedReviews.push(authorReview);
      });
      setReviews(mappedReviews);
    });
  }, [movieId]);
  return reviews && <Reviews reviews={reviews} />;
}
