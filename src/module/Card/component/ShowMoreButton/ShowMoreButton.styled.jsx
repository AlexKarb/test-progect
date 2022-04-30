import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--first-color-bg);
  border: none;
  padding-top: 8px;
  padding-bottom: 8px;
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

  &:hover {
    background-color: rgb(65 106 229);
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    width: 140px;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 22px;
  }
`;

export const DownLine = styled(FiChevronDown)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  transform: ${({ isopen }) => isopen};

  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;
