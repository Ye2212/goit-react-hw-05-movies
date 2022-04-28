// import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Info, Image, Title, Vote } from './MoviesListItem.styled';

function MoviesListItem({ id, title, poster, vote }) {
  const location = useLocation();

  return (
    <Item>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <Info>
          <Title>{title ? title : 'No Title'}</Title>
          <Vote>Vote: {vote}</Vote>
        </Info>

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
