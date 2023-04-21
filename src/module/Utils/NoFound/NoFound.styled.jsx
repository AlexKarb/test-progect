import styled from 'styled-components';
import { BsExclamationTriangle } from 'react-icons/bs';

export const Text = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 16px;
  color: #ffffff54;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 18px;
  }
`;

export const ExclamationPoint = styled(BsExclamationTriangle)`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  color: #ffffff54;
  display: block;
  margin-top: 50px;

  @media screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }

  @media screen and (min-width: 1024px) {
    width: 60px;
    height: 60px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
`;
