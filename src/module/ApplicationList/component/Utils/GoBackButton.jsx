import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Icon = styled(BsArrowLeft)`
  height: 25px;
  width: 25px;
  color: white;
  position: absolute;
  top: 15px;
  left: 30px;

  &:hover {
    color: #afafaf;
  }
`;

export const GoBackButton = ({ path }) => {
  return (
    <Link to={path}>
      <Icon />
    </Link>
  );
};
