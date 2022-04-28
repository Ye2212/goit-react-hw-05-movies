// import { useLocation } from 'react-router-dom';
import {
  MainWrapper,
  Section,
  Image,
  InfoThumb,
  TitleWrapper,
  Title,
  SubTitle,
  InfoText,
  GoBackBtn,
  ExtraInfo,
  Wrapper,
  AditionalText,
  ExtraPagesList,
  Item,
  StyledLink,
} from './MovieInfo.styled';
export default function MovieInfo({ movieDetails }) {
  const { title, genres, poster, overview, releaseDate, vote } = movieDetails;
  // const location = useLocation();
  console.log(genres.map(g => g.name));
  const genresInfo = genres.map(g => g.name);
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
          <InfoText> {genresInfo + ''}</InfoText>

          <GoBackBtn>Go Back</GoBackBtn>
        </InfoThumb>
      </Section>
      <ExtraInfo>
        <Wrapper>
          <AditionalText>Aditional Information</AditionalText>
        </Wrapper>

        <ExtraPagesList>
          <Item>
            <StyledLink to="cast">Cast</StyledLink>
          </Item>
          <Item>
            <StyledLink to="reviews">Reviews</StyledLink>
          </Item>
        </ExtraPagesList>
      </ExtraInfo>
    </MainWrapper>
  );
}
