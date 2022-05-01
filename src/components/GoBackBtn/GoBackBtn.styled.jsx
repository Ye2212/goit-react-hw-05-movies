import styled from '@emotion/styled';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
export const GoBackBtn = styled.button`
  width: 80px;
  height: 30px;
  font-size: 12px;
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
export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  margin-right: 5px;
`;
