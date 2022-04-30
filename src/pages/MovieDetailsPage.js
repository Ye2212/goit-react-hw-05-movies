import { useParams, Routes, Route } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { useState, useEffect } from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';
import CastPage from './CastPage';
import ReviewsPage from './ReviewsPage';
// import Reviews from 'components/Reviews/Reviews';

export default function MovieDetailsPage() {
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  // ===================================================================================================================================

  // const [reviews, setReviews] = useState(null);
  // // const movieId = useParams();

  // useEffect(() => {
  //   fetchMoviesReviews(movieId).then(r => {
  //     const mappedReviews = [];
  //     r.results.map(({ author, content, id }) => {
  //       const authorReview = {
  //         id: id,
  //         author: author,
  //         review: content,
  //       };
  //       return mappedReviews.push(authorReview);
  //     });
  //     setReviews(mappedReviews);
  //   });
  // }, [movieId]);
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
      {/* {reviews && <Reviews reviews={reviews} />} */}

      {/* <Suspense> */}
      <Routes>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Routes>
      {/* </Suspense> */}
    </>
  );
}
