import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from 'react-icons/md';

export const MainWrapper = styled.div`
  padding: 0 100px;
`;

export const Section = styled.section`
  margin-top: 10px;
  padding: 80px;
  display: flex;
`;

export const Image = styled.img`
  width: 300px;
  @media (min-width: 768px) {
    width: 400px;
  }
`;
export const InfoThumb = styled.div`
  @media (min-width: 768px) {
    margin-left: 50px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #000000d1;
  margin-bottom: 20px;
  font-family: 'Arial';
  //   @media (min-width: 768px) {
  //     font-size: 25px;
  //     margin-bottom: 0;
  //   }
  //   @media (min-width: 1440px) {
  //     font-size: 30px;
  //     margin-bottom: 0;
  //   }
  //
`;
export const SubTitle = styled.h3`
  font-size: 18px;
  color: #00000096;
  margin-bottom: 10px;
  font-family: 'Arial';
  // @media (min-width: 768px) {
  //   font-size: 25px;
  //   margin-bottom: 0;
  // }
  // @media (min-width: 1440px) {
  //   font-size: 50px;
  //   margin-bottom: 0;
  // }
`;
export const InfoText = styled.p`
  font-weight: 400;
  font-size: 15px;
  font-family: 'Arial';
  margin-bottom: 20px;
  // @media (min-width: 1440px) {
  //   font-size: 18px;
  // }
`;

export const GoBackBtn = styled.button`
  width: 80px;
  height: 30px;
  font-size: 12px;
  font-family: 'Arial';
  background-color: #000000d1;
  color: white;
  border: none;
  border-radius: 4px;
  margin-top: 100px;
  transform: scale(1);
  transition: all 250ms;
  :hover {
    transform: scale(0.92);
  }
  :hover {
    opacity: 0.8;
  }
`;

export const ExtraInfo = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  height: 40px;
  background-color: #000000d1;
  padding: 0 20px;
  margin-bottom: 15px;
`;
export const AditionalText = styled.p`
  color: white;
  font-size: 20px;
  font-weight: 500;
  font-family: 'Arial';
`;
export const ExtraPagesList = styled.ul``;
export const Item = styled.li`
  display: block;
  margin-bottom: 8px;
  align-items: center;
  // transform: scale(1);
  transition: all 250ms;
  :hover {
    opacity: 0.8;
  }
  :last-child {
    margin-bottom: 0;
    border-bottom: 1px solid black;
  }
`;
export const StyledLink = styled(NavLink)`
  font-size: 18px;
  font-family: 'Arial';
  color: #000000d1;
  display: block;
  margin-bottom: 8px;
`;

export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  margin-right: 5px;
`;

export const ArrowForward = styled(MdOutlineArrowForwardIos)`
  margin-left: 5px;
  height: 13px;
`;
