import {
  ReviewsList,
  Item,
  Author,
  ReviewContent,
  NoReviewText,
} from './Reviews.styled';

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList>
          {reviews.map(({ author, review, id }) => (
            <Item key={id}>
              <Author>
                {author}: <ReviewContent>"{review}"</ReviewContent>
              </Author>
            </Item>
          ))}
        </ReviewsList>
      ) : (
        <NoReviewText> We don't have any reviews here yet</NoReviewText>
      )}
    </>
  );
}
