import styled from 'styled-components';
import { GiHeartPlus } from 'react-icons/gi';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 210px;
  font-size: 18px;
  font-weight: 700;

  padding: 14px 4px;
  margin: 0 auto;

  background-color: #2ccac1;
  box-shadow: 3px 3px 7px #5a5a5a63;
  color: rgb(255 255 255);
  border: none;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #28b7af;
    box-shadow: 3px 3px 7px #3f3e3e63;
  }

  &:active {
    background-color: #475094b8;
  }

  @media screen and (min-width: 768px) {
    width: 300px;
    font-size: 24px;
    padding: 18px 4px;
  }

  @media screen and (min-width: 1024px) {
    width: 250px;

    font-size: 20px;
    padding: 8px 5px;
  }
`;

export const PlusIcon = styled(GiHeartPlus)`
  color: #fff;
  margin-right: 8px;
  height: 20px;
  width: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 15px;
    height: 26px;
    width: 26px;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 15px;
    height: 20px;
    width: 20px;
  }
`;
