import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdOutlineMovieFilter } from 'react-icons/md';

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  // position: fixed;
  // top: 0;
  z-index: 1000;
  background-color: #000000d1;
  font-family: 'Open Sans';
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-right: 80px;
  margin-left: 40px;
  color: white;
  font-size: 20px;
  align-items: center;
`;

export const Logo = styled(MdOutlineMovieFilter)`
  width: 30px;
  height: 30px;
  transition: opacity 250ms;
  margin-right: 5px;
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  margin-right: 25px;
  transform: scale(1);
  transition: transform 250ms;
  :hover {
    transform: scale(0.92);
  }

  :last-child {
    margin-right: 0;
  }
`;
export const NavigationLink = styled(NavLink)`
  font-size: 12px;
  color: white;
  transition: opacity 250ms;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  :hover {
    opacity: 0.8;
  }
`;
