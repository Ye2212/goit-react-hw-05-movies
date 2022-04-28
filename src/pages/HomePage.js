import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from 'services/api';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);
  useEffect(() => {
    fetchTrendingMovies()
      .then(response => response.results)
      .then(setMovies);
  }, []);
  console.log(movies);
  return <>{movies && <MoviesList movies={movies} />}</>;
}
