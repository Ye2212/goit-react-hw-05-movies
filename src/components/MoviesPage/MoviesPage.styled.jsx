import styled from '@emotion/styled';
import { GoSearch } from 'react-icons/go';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 800px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;
export const Button = styled.button`
  display: inline-block;
  width: 35px;
  height: 35px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 1;
  }
`;
export const SearchSvg = styled(GoSearch)`
  width: 22px;
  height: 22px;
  fill: #24292f;
`;
export const Input = styled.input`
  width: 100%;
  height: 35px;
  padding: 0 10px 0 10px;
  padding: 0 10px 0 10px;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  padding-left: 4px;
  padding-right: 4px;
  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
  &:focus {
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75) inset;
  }
`;
