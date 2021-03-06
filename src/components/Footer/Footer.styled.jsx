import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 40px;

  bottom: 0;
  left: 0;
  background-color: #f5f5f5;
  align-items: center;

  // justify-content: space-around;
  font-size: 10px;
  font-family: 'Roboto';
`;

export const DeveloperData = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  font-family: 'Arial';
`;

export const DeveloperLink = styled.link``;

export const Svg = styled(BsGithub)`
  margin-left: 5px;
  color: #000000d1;
  width: 25px;
  height: 25px;
  transform: scale(1);
  transition: all 250ms;
  :hover {
    opacity: 0.8;
    transform: scale(0.92);
  }
`;
