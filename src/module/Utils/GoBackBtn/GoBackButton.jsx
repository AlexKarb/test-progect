import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Icon = styled(BsArrowLeft)`
  height: 25px;
  width: 25px;
  color: white;

  &:hover {
    color: #afafaf;
  }
`;

const StyledLink = styled(Link)`
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
`;

export const GoBackButton = ({ path }) => {
  console.log('~ path', path);
  return (
    <StyledLink to={path ? path : '/'} aria-label="закрити вікно">
      <Icon />
    </StyledLink>
  );
};
