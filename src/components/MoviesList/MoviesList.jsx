// import propTypes from 'prop-types';
import { List } from './MoviesList.styled';
import MoviesListItem from 'components/MoviesListItem/MoviesListItem';

function MoviesList({ movies }) {
  return (
    <List>
      {movies.map(({ id }) => (
        <MoviesListItem key={id} />
      ))}
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
