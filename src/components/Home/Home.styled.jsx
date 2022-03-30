import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 18px;
`;
export const Button = styled(Link)`
  background-color: #c1e7ff;
  box-shadow: 6px 3px 4px #69636336;
  height: 40px;
  width: 250px;
  color: black;
  text-decoration: none;
  text-align: center;
  padding: 10px 5px;
  border: 2px solid #4949ff42;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;
