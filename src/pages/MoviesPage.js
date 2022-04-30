import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMoviesBySearch } from 'services/api';
import {
  Form,
  Button,
  SearchSvg,
  Input,
} from '../components/Searchbar/Searchbar.styled.jsx';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MoviesList from 'components/MoviesList/MoviesList';
import { mapper } from 'utils/mapper';

export default function MoviesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);

  const onChangeQuery = e => {
    setSearchQuery(e.target.value);
  };
  const resetForm = () => {
    setSearchQuery('');
  };
  const onFormSubmit = e => {
    e.preventDefault();

    const newQuery = e.target.elements.query.value.toLowerCase();
    if (newQuery === '') {
      toast.error("Please, enter coorrect film's name");
      resetForm();
      return;
    }
    setSearchParams({ query: newQuery });
    // e.currentTrget.reset();
  };
  useEffect(() => {
    if (searchParams.get('query') !== null) {
      const newQuery = searchParams.get('query');
      fetchMoviesBySearch(newQuery).then(r => {
        const mappedMovies = mapper(r.results);
        setMovies(mappedMovies);
        resetForm();
      });
    }
  }, [searchParams]);
  //   fetchMoviesBySearch(query).then(({ results }) => {
  //     const movies = [];
  //     results.map(({ id, original_title, poster_path }) => {
  //       const movie = {
  //         id,
  //         title: original_title,
  //         poster: poster_path,
  //       };
  //       return movies.push(movie);
  //     });
  //     setMovies(movies);
  //   });
  // }

  return (
    <>
      <ToastContainer />
      <Form onSubmit={onFormSubmit}>
        <Button type="submit">
          <span>
            <SearchSvg />
          </span>
        </Button>
        <Input
          type="text"
          name="query"
          value={searchQuery}
          onChange={onChangeQuery}
        ></Input>
      </Form>
      {movies && <MoviesList movies={movies} />}
    </>
  );
}
