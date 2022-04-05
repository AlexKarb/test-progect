import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.span`
  margin-right: 10px;
  width: 78px;

  @media screen and (min-width: 1024px) {
    width: 100px;
  }
`;

export const Info = styled.p`
  border: 1px solid teal;
  border-radius: 12px;
  padding: 10px;
  width: 150px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;

export const Button = styled.button`
  background-color: var(--first-color-bg);
  border: none;
  padding: 5px 0;
  padding-left: 6px;
  padding-right: 10px;
  text-align: center;
  border-radius: 5px;
  color: var(--main-text-color);
  display: flex;
  align-items: center;
`;

export const DownLine = styled(FaAngleDown)`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;
