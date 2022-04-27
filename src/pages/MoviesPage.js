import { useState, useEffect } from 'react';
import { fetchMoviesBySearch } from 'services/api';
// import Container from 'components/Container/Container';
import Searchbar from 'components/Searchbar/Searcbar';
import MoviesList from 'components/MoviesList/MoviesList';

export default function MoviesPage() {
  let query = '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (query !== '') {
      fetchMoviesBySearch(query).then(({ results }) => {
        const movies = [];
        results.map(({ id, original_title, poster_path }) => {
          const movie = {
            id,
            title: original_title,
            poster: poster_path,
          };
          return movies.push(movie);
        });
        setMovies(movies);
      });
    }
  }, [query]);

  return (
    <>
      <Searchbar />
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
