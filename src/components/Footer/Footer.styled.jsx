import styled from '@emotion/styled';
import { BsGithub } from 'react-icons/bs';

export const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  right: 0;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: space-around;
  font-size: 10px;
`;

export const CopyrightData = styled.p`
  // margin-left: auto;
`;

export const DeveloperData = styled.div`
  display: flex;
  align-items: center;
`;

export const DeveloperLink = styled.link``;

export const Svg = styled(BsGithub)`
  margin-left: 5px;
  color: #000000d1;
  width: 25px;
  height: 25px;
  transition: opacity 250ms;
  :hover {
    opacity: 0.8;
  }
`;
