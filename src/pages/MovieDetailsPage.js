import { useParams } from 'react-router-dom';
import {
  fetchMovieDetails,
  fetchMovieCast,
  fetchMoviesReviews,
} from 'services/api';
import { useState, useEffect } from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';
// import ReviewsPage from './ReviewsPage';
import Casts from 'components/Casts/Casts';
import Reviews from 'components/Reviews/Reviews';

export default function MovieDetailsPage() {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  const [casts, setCasts] = useState(null);
  // const movieId = useParams();

  const [reviews, setReviews] = useState(null);
  // const movieId = useParams();

  // ===================================================================================================================================

  useEffect(() => {
    fetchMovieCast(movieId).then(r => {
      const mappedCasts = [];
      console.log(r.cast);
      r.cast.map(({ id, original_name, profile_path }) => {
        const cast = {
          id: id,
          name: original_name,
          photo: profile_path,
        };
        return mappedCasts.push(cast);
      });
      setCasts(mappedCasts);
    });
  }, [movieId]);
  console.log(casts);

  // ===================================================================================================================================

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
  // console.log(reviews);

  // ===================================================================================================================================

  useEffect(() => {
    fetchMovieDetails(movieId).then(
      // r => console.log(r)
      ({
        original_title,
        genres,
        overview,
        poster_path,
        release_date,
        vote_average,
      }) => {
        const movieDetails = {
          title: original_title,
          genres: genres,
          overview: overview,
          poster: poster_path,
          releaseDate: release_date,
          vote: vote_average,
        };
        return setDetails(movieDetails);
      }
    );
  }, [movieId, setDetails]);
  // console.log(details);

  return (
    <>
      {details && <MovieInfo movieDetails={details} />}
      {casts && <Casts casts={casts} />}
      {reviews && <Reviews reviews={reviews} />}
    </>
  );
}
