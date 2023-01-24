import styled from 'styled-components';
import { Field } from 'formik';

export const InputWrapp = styled.div`
  margin-bottom: 20px;
  position: relative;
`;
export const InputErrorMessage = styled.div`
  position: absolute;
  font-size: 12px;
  padding-left: 4px;
  padding-top: 2px;
  color: #fff;
`;

export const InputStyled = styled(Field)`
  background-color: #c1e7ff;
  box-shadow: 6px 3px 4px #69636336;
  font-size: 16px;
  height: 40px;
  width: 240px;
  color: #1a299ff2;
  text-decoration: none;
  padding: 10px 25px;
  /* border: 2px solid #4949ff42; */
  border: none;
  border: ${({ valid }) => valid};
  border-radius: 6px;

  &::placeholder {
    color: #7482e0ae;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
  }

  @media screen and (min-width: 1024px) {
    height: 35px;
  }

  &:focus {
    outline: none;
    background-color: #fff;
  }

  &:hover {
    outline: none;
  }

  &:valid &:not(:placeholder-shown) {
    border: 1.5px solid #00ff35;
  }

  /* &:invalid &:not(:placeholder-shown) {

  } */
`;
