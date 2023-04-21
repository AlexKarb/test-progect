import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -14px;
    left: 0;
    right: 0;
    z-index: -1;
    height: 1px;
    background-color: #fff;
    border-radius: 25px;
  }

  position: relative;
  width: 100%;

  margin-bottom: 30px;
  padding-top: 15px;
  padding-bottom: 15px;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1024px) {
    /* min-width: 475px; */
    width: 360px;
    &::before {
      top: 192px;
      left: -107px;
      right: 0;
      transform: rotate(90deg);
      width: 212px;
    }
  }
`;

export const SubmitBtn = styled.button`
  height: 40px;
  width: 100%;
  max-width: 250px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  text-align: center;

  border: none;
  border-radius: 6px;
  cursor: ${({ disabled }) => {
    return disabled ? 'auto' : 'pointer';
  }};

  background-color: ${({ disabled }) => {
    return disabled ? '#475094b8' : '#2234c0d0';
  }};

  margin: 0 auto;

  &:hover {
    transform: ${({ disabled }) => {
      return disabled ? 'none' : 'scale(1.05)';
    }};
  }

  &:active {
    background-color: #475094b8;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    height: 30px;
    margin-top: 0;
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;

  @media screen and (min-width: 1024px) {
    padding: 10px 0px;
  }
`;

export const Title = styled.h1`
  font-size: 16px;
  text-align: center;
  margin-left: 10px;
  margin-bottom: 30px;
  color: #fff;

  width: 280px;

  @media screen and (min-width: 768px) {
    width: auto;
    font-size: 23px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const Wrapp = styled.div`
  position: absolute;
  bottom: 62px;
  right: 20px;
`;
