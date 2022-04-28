import styled from '@emotion/styled';

export const Item = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    &:hover {
      transform: scale(1.03);
      cursor: zoom-in;
`;
export const Image = styled.img`
  width: 300px;
  margin-bottom: 15px;
  @media (min-width: 768px) {
    width: 350px;
  }
  object-fit: cover;
  }
`;
export const Title = styled.h2`
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 15px;
`;
