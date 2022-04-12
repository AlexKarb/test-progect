import styled from 'styled-components';
import { BsExclamationTriangle } from 'react-icons/bs';

const Text = styled.p`
  font-size: 20px;
  text-align: center;
  padding: 16px;
  color: #ffffff54;
`;

const ExclamationPoint = styled(BsExclamationTriangle)`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  color: #ffffff54;
  display: block;
  margin-top: 50px;
`;

export const NoFound = () => (
  <>
    <ExclamationPoint />
    <Text>заявок не знайдено</Text>
  </>
);
