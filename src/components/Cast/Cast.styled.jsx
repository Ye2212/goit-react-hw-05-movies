import styled from '@emotion/styled';

export const CastsList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding: 50px 80px 90px;
`;

export const Item = styled.li`
padding:10px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    &:hover {
      transform: scale(1.03);
      cursor: zoom-in;
`;

export const Photo = styled.img``;

export const ActorName = styled.h3`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 500;
  color: #000000d1;
`;

export const NoInformationText = styled.p`
  display: flex;
  justify-content: center;
  padding: 20px;
  font-weight: 500;
`;
