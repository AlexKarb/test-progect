import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Button = styled.button.attrs(prop => ({
  type: 'button',
}))`
  position: fixed;
  bottom: 20px;
  right: 30px;
  border: none;
  outline: none;
  background-color: var(--main-color-bg);
  color: white;
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #aabcf1;
  }
`;

export const DownLine = styled(FiChevronDown)`
  width: 100%;
  height: auto;
`;
