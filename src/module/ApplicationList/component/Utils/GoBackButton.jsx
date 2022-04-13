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

  color: white;
  border: none;
  background-color: transparent;

  &:hover {
    color: #afafaf;
  }
`;

export const GoBackButton = ({ path }) => {
  return (
    <StyledLink to={path} aria-label="закрити вікно">
      <Icon />
    </StyledLink>
  );
};
