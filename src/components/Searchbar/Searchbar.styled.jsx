import styled from '@emotion/styled';
import { GoSearch } from 'react-icons/go';

export const Form = styled.form`
  margin: 0 auto;
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  border-radius: 3px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 25px;
  height: 25px;
  border: 0;
  background-color: transparent;
  // opacity: 0.2;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const SearchSvg = styled(GoSearch)`
  width: 15px;
  height: 15px;
  fill: #24292f;
`;

export const Input = styled.input`
  width: 300px;
  height: 25px;
  padding: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  font-size: 20px;
  border: none;
  // background-color: #f2f2f2;
  border-bottom: 0.5px solid #00000073;
  font: inherit;
  font-size: inherit;
  outline: none;
  // border-bottom-right-radius: 4px;
  // border-top-right-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    // font-size: 18px;
  }
  // &:focus {
  //   box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  // }
`;
