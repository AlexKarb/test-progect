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
  padding: 6px 0;
  padding-left: 8px;
  padding-right: 18px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  width: 160px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const DownLine = styled(FaAngleDown)`
  width: 18px;
  height: 18px;
  margin-right: 4px;
`;
