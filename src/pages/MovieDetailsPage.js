import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';
import { useState, useEffect } from 'react';
import MovieInfo from '../components/MovieInfo/MovieInfo';

export default function MovieDetailsPage() {
  // const [reviews, setReviews] = useState(null);
  const [details, setDetails] = useState(null);
  const { movieId } = useParams();

  // useEffect(() => {
  //   fetchMoviesReviews(movieId).then(r => console.log(r.results));
  // }, [movieId]);

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

  console.log(details);

  return (
    <>
      {details && <MovieInfo movieDetails={details} />}
      {/* <section>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <h2>{}</h2>
          <p>Vote</p>
          <h3>Overwiew</h3>
          <p>Overwiew</p>
          <h3>Genres</h3>
        </div>
      </section>
      <div>
        <p>Aditional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </div> */}
    </>
  );
}
