import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 28px;
  color: #fff;
  text-shadow: 0px 0px 6px #0000a3;
  width: 280px;

  @media screen and (min-width: 768px) {
    width: auto;
    margin-bottom: 18px;
  }
`;

export const Input = styled(Field)`
  position: relative;
  background-color: #c1e7ff;
  box-shadow: 6px 3px 4px #69636336;
  font-size: 16px;
  height: 40px;
  width: 240px;
  color: #1a299ff2;
  text-decoration: none;
  text-align: center;
  padding: 10px 5px;
  border: none;
  border: ${({ options }) => {
    const { values, errors, touched } = options;
    const styleValid = '1.5px solid #00ff35';
    const styleInValid = '0.5px solid #ff0000';

    return (
      (values && errors && touched && styleInValid) ||
      (values && touched && styleValid) ||
      'none'
    );
  }};
  border-radius: 6px;

  &:not(:first-child) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
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

export const SubmitBtn = styled.button.attrs(
  ({ isSubmitting, v: { password, login } }) => ({
    type: 'submit',
    disabled: isSubmitting || !(password && login) ? true : false,
  })
)`
  box-shadow: 6px 3px 4px #69636336;
  height: 40px;
  width: 100%;
  max-width: 250px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  border: none;
  border-radius: 6px;
  cursor: ${({ v: { password, login } }) => (password && login ? 'pointer' : ' auto')};
  background-color: #2234c0d0;

  margin: 0 auto;
  margin-top: 20px;

  &:hover {
    transform: ${({ v: { password, login } }) =>
      password && login ? ' scale(1.05)' : 'none'};
  }

  &:active {
    ${({ v: { password, login } }) => password && login && 'background-color: #475094b8'};
  }

  @media screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Container = styled.div`
  height: 100%;
  padding: 90px 20px 30px;
  width: 280px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 500px;
  }
`;

export const Text = styled.p`
  color: #fff;
  align-self: flex-end;
  margin-top: 20px;
  font-size: 12px;

  text-shadow: 0px 0px 6px #0000a3;

  @media screen and (min-width: 768px) {
    padding-right: 40px;
  }
`;

export const SLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const PasswordInput = styled.div`
  position: relative;
`;
