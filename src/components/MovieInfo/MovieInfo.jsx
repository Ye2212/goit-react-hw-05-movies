import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import GoBackButton from 'components/GoBackBtn/GoBackBtn';
import {
  MainWrapper,
  Section,
  Image,
  InfoThumb,
  TitleWrapper,
  Title,
  SubTitle,
  InfoText,
  ExtraInfo,
  Wrapper,
  AditionalText,
  ExtraPagesList,
  Item,
  StyledLink,
  ArrowForward,
} from './MovieInfo.styled';
export default function MovieInfo({ movieDetails }) {
  const { title, genres, poster, overview, releaseDate, vote } = movieDetails;
  const location = useLocation();
  console.log(location);
  // console.log(genres.map(g => g.name));
  const genresInfo = genres.map(g => g.name).join(', ');
  return (
    <MainWrapper>
      <Section>
        <Image
          src={
            poster ? `https://image.tmdb.org/t/p/w500/${poster}` : 'No Image'
          }
          alt={title}
        />
        <InfoThumb>
          <TitleWrapper>
            <Title>{title}</Title>
            <SubTitle>Vote: {vote}</SubTitle>
          </TitleWrapper>
          <SubTitle>Date release: {releaseDate}</SubTitle>
          <SubTitle>Overwiew:</SubTitle>
          <InfoText> {overview}</InfoText>
          <SubTitle>Genres:</SubTitle>
          <InfoText> {genresInfo}</InfoText>

          <GoBackButton location={location} />
        </InfoThumb>
      </Section>

      <ExtraInfo>
        <Wrapper>
          <AditionalText>Aditional Information</AditionalText>
        </Wrapper>

        <ExtraPagesList>
          <Item>
            <StyledLink to="cast">
              Cast
              <ArrowForward />
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="reviews">
              Reviews
              <ArrowForward />
            </StyledLink>
          </Item>
        </ExtraPagesList>
      </ExtraInfo>
    </MainWrapper>
  );
}
MovieInfo.propTypes = {
  movieDetails: propTypes.shape({
    title: propTypes.string,
    genres: propTypes.arrayOf(
      propTypes.shape({
        id: propTypes.number,
        name: propTypes.string,
      })
    ),
    poster: propTypes.string,
    overview: propTypes.string,
    releaseDate: propTypes.string,
    vote: propTypes.number,
  }),
};
