import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const WrapTitle = styled.div`
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    width: 600px;
    margin-bottom: 52px;
  }

  @media screen and (min-width: 1024px) {
    width: auto;
    margin-bottom: 0px;
  }
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  text-align: end;
  color: white;
  margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    font-size: 42px;
    margin-bottom: 22px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 24px;
    margin-bottom: 15px;
    text-align: left;
    padding-top: 10px;
  }
`;
export const SubTitle = styled.p`
  color: #ffff00;
  display: flex;
  justify-content: end;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const Heart = styled(FaHeart)`
  color: inherit;
  width: 20px;
  height: 20px;
  margin-left: 6px;
`;
