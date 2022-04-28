// import propTypes from 'prop-types';
import { Item, Image, Title } from './MoviesListItem.styled';
import Link from 'react-scroll/modules/components/Link';

function MoviesListItem({ id, title, poster }) {
  return (
    <Item>
      <Link to={`movies/${id}`}>
        <Title>{title}</Title>
        <Image
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : 'No Poster'
          }
          alt={title}
        />
      </Link>
    </Item>
  );
}
// ImageGalleryItem.propTypes = {
//     smallImage: propTypes.string.isRequired,
//     largeImage: propTypes.string.isRequired,
//     toggleModal: propTypes.func.isRequired,
//     openModalImg: propTypes.func.isRequired,
// };
export default MoviesListItem;
