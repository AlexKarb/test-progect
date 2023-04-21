import styled from 'styled-components';
import { Field, Form } from 'formik';
import { Link } from 'react-router-dom';
import { FaQuestionCircle } from 'react-icons/fa';

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 24px;
  color: #fff;
  max-width: 315px;

  @media screen and (min-width: 768px) {
    max-width: 400px;

    font-size: 24px;
  }

  @media screen and (min-width: 1024px) {
    max-width: auto;
    font-size: 16px;
    margin-bottom: 24px;
  }
`;

export const SInput = styled(Field)`
  background-color: #c1e7ff;
  box-shadow: 6px 3px 4px #69636336;
  height: 40px;

  font-size: 16px;
  color: #1a299ff2;
  text-decoration: none;
  padding: 10px 15px;
  /* border: 2px solid #4949ff42; */
  border: none;
  border: ${({ valid }) => valid};
  border-radius: 6px;
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 10px 35px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    font-style: italic;
    width: 300px;
    height: 30px;
    padding: 10px 40px;
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

export const SubmitBtn = styled.button`
  box-shadow: 6px 3px 4px #69636336;
  height: 40px;
  width: 250px;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
  text-align: center;

  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #2234c0ba;

  margin: 0 auto;
  margin-top: 12px;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: #1929a7b9;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    /* height: 35px; */
    width: 200px;
  }
`;

export const FormContainer = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  background-color: rgb(62 101 218 / 80%);
  padding: 70px 20px 40px;
  height: 665px;

  @media screen and (min-width: 768px) {
    padding: 40px 20px;
    height: 645px;
    justify-content: center;
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 20px 30px;
    height: 340px;
  }
`;

export const Container = styled.div`
  height: 100%;
  padding: 40px 10px 10px;
  margin: 0 auto;
  max-width: 610px;

  @media screen and (min-width: 768px) {
    padding: 70px 10px 30px;
    width: 610px;
    max-width: 610px;
  }

  @media screen and (min-width: 1024px) {
    padding: 30px 15px 30px;
    width: 540px;
    max-width: 540px;
  }
`;

export const Text = styled.p`
  color: #fff;
  align-self: center;
  text-align: center;

  font-size: 14px;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1024px) {
    /* margin-bottom: 30px; */
  }
`;

export const TextPS = styled(Text)`
  margin-top: 12px;
  font-size: 12px;
  margin-bottom: 10px;

  @media screen and (min-width: 1024px) {
    width: 340px;
  }
`;

export const SLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
`;

export const Sub = styled.p`
  color: #fff;
  margin-left: 15px;
  padding-bottom: 10px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    margin-left: 35px;
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    width: 140px;
    font-size: 12px;
    margin-right: 10px;
    margin-left: 0px;
    padding-bottom: 0px;
  }
`;

export const InputWrapp = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 25px;
  min-width: 260px;
  width: calc(100% - 20%);

  @media screen and (min-width: 768px) {
    width: 400px;
  }

  @media screen and (min-width: 1024px) {
    width: 440px;
    /* padding-left: 100px; */
    margin-bottom: 10px;
    flex-direction: row-reverse;
    align-items: center;
  }
`;

export const InfoWrap = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 44px;
  left: 50%;
  transform: translateX(-50%);
  width: 280px;

  transition: all 0.5s;

  padding: 20px 10px 20px 30px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 16px #00000082;
  color: #00000082;

  @media screen and (min-width: 412px) {
    right: 50px;
    left: auto;
    transform: none;
  }

  @media screen and (min-width: 768px) {
    padding: 20px 30px;
    width: 500px;
  }

  @media screen and (min-width: 1024px) {
    top: 50%;
    transform: translateY(-50%);
    width: 400px;
  }
`;
export const InfoText = styled.div`
  font-size: 12px;
  margin-bottom: 8px;
  position: relative;

  &::before {
    content: '';
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #00000082;
    position: absolute;
    top: 4px;
    left: -19px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

export const InfoTitle = styled.p`
  color: #00000082;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 15px;
  text-align: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
  }
`;

export const QuestionIcon = styled(FaQuestionCircle)`
  position: absolute;
  top: 15px;
  right: 25px;

  /* color: #d3373799; */
  color: #ffffff69;
  width: 25px;
  height: 25px;
  cursor: pointer;

  &:hover ~ ${InfoWrap} {
    opacity: 1;
    visibility: visible;
  }

  @media screen and (min-width: 768px) {
    top: 10px;
    right: 20px;
  }

  @media screen and (min-width: 1024px) {
    width: 15px;
    height: 15px;
  }
`;

export const CaptchaWrapp = styled.div`
  /* height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 250px;
  }

  @media screen and (min-width: 1024px) {
    height: auto;
  } */

  width: 162px;
  height: 142px;
  border-radius: 6px;
  margin: 0 auto;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    width: 306px;
    height: 80px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 20px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 26px;
`;

export const Wrapp = styled.div`
  display: flex;
  flex-direction: column;
  height: 240px;

  @media screen and (min-width: 1024px) {
    height: 140px;
  }
`;
