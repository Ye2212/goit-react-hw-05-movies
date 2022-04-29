import dedaultImg from '../../images/defaultImg.jpg';
import {
  CastsList,
  Item,
  Photo,
  ActorName,
  NoInformationText,
} from './Casts.styled';
export default function Casts({ casts }) {
  return (
    <>
      {casts.length > 0 ? (
        <CastsList>
          {casts.map(({ id, name, photo }) => (
            <Item key={id}>
              {photo ? (
                <Photo
                  src={`https://image.tmdb.org/t/p/w300/${photo}`}
                  alt={name}
                />
              ) : (
                <img src={dedaultImg} alt={name} width={300} height={450} />
              )}

              <ActorName>{name}</ActorName>
            </Item>
          ))}
        </CastsList>
      ) : (
        <NoInformationText>No information here</NoInformationText>
      )}
    </>
  );
}
