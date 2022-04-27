import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { MdOutlineMovieFilter } from 'react-icons/md';

export const HeaderWrapper = styled.header`
  display: flex;
  width: 100%;
  height: 20px;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: black;
  // background-color: #2f364a;
  padding: 40px 0 40px 0;
`;

export const LogoWrapper = styled.div`
  display: flex;
  margin-right: 80px;
  color: white;
  font-size: 20px;
  align-items: center;
  transition: opacity 250ms;
  :hover {
    opacity: 0.8;
  }
`;

export const Logo = styled(MdOutlineMovieFilter)`
  width: 50px;
  height: 50px;
  transition: opacity 250ms;
  margin-right: 5px;

  // :hover {
  //   opacity: 0.8;
  // }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const NavigationItem = styled.li`
  margin-right: 25px;
  :last-child {
    margin-right: 0;
  }
`;
export const NavigationLink = styled(NavLink)`
  font-size: 15px;
  color: white;
  transition: opacity 250ms;
  text-decoration: none;
  // &.active {
  //   text-decoration: underline;
  // }
  :hover {
    opacity: 0.8;
  }
`;
