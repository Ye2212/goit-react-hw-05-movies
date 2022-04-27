import styled from '@emotion/styled';

export const ContainerBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
  margin: 0 auto;
  // padding: 0 10px 0 10px;
  @media (min-width: 768px) {
    width: 748px;
  }
  @media (min-width: 1440px) {
    width: 1600px;
  }
`;
