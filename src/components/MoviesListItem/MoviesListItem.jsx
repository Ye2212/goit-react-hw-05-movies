import propTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Item, Info, Image, Title, Vote } from './MoviesListItem.styled';

function MoviesListItem({ id, title, poster, vote }) {
  const location = useLocation();
  // console.log(location);

  return (
    <Item>
      <Link
        to={`/movies/${id}`}
        state={{ from: location.pathname + location.search }}
      >
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
MoviesListItem.propTypes = {
  id: propTypes.number.isRequired,
  title: propTypes.string.isRequired,
  poster: propTypes.string.isRequired,
  vote: propTypes.number.isRequired,
};
export default MoviesListItem;
