import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const Icon = styled(BsArrowLeft)`
  height: 100%;
  width: 100%;
  color: white;

  &:hover {
    color: #afafaf;
  }
`;

export const StyledLink = styled(Link)`
  height: 25px;
  width: 25px;
  position: absolute;
  top: 15px;
  left: 30px;
  z-index: 1;
  color: white;
  border: none;
  background-color: transparent;

  &:hover {
    color: #afafaf;
  }

  @media screen and (min-width: 768px) {
    height: 45px;
    width: 45px;
    top: 10px;
    left: 20px;
  }
`;
