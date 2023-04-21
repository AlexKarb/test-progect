import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 10px;
  left: 25px;
`;
export const Icon = styled(BsArrowLeft)`
  height: 100%;
  width: 100%;
  color: white;

  &:hover {
    color: #afafaf;
  }
`;
