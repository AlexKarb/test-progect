import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--first-color-bg);
  border: none;
  padding: 8px 0;
  padding-left: 4px;
  padding-right: 14px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  width: 110px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const DownLine = styled(FiChevronDown)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  transform: ${({ isopen }) => isopen};
`;
