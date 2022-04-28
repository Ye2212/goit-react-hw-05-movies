// import propTypes from 'prop-types';
import { List } from './MoviesList.styled';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(({ id, original_title, poster_path, vote_average }) => {
        return (
          <MoviesListItem
            key={id}
            id={id}
            title={original_title}
            poster={poster_path}
            vote={vote_average}
          />
        );
      })}
    </List>
  );
}
// ImageGallery.propTypes = {
//   images: propTypes.arrayOf(
//     propTypes.exact({
//       id: propTypes.number.isRequired,
//       largeImageURL: propTypes.string.isRequired,
//       webformatURL: propTypes.string.isRequired,
//     })
//   ).isRequired,
//   toggleModal: propTypes.func.isRequired,
//   openModalImg: propTypes.func.isRequired,
// };
export default MoviesList;
