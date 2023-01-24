import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  padding: 28px 0px 28px 10px;
  overflow-y: auto;
  background: var(--Linear-bg);
  flex-shrink: 0;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    padding-top: 9px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  height: 54px;
  padding-left: 9px;
  color: #2ccac1;

  border: none;
  border-radius: 5px 0 0 5px;
  background-color: transparent;

  &:hover {
    background-color: var(--hover-color-bg);
  }

  &:active {
    background-color: #475094b8;
  }

  @media screen and (min-width: 768px) {
    height: 90px;
  }

  @media screen and (min-width: 1024px) {
    height: 60px;
  }
`;

export const LinkMenu = styled(Link)`
  display: flex;
  align-items: center;
  color: #2ccac1;
  height: 100%;
  text-decoration: none;
  pointer-events: ${({ active }) => active};

  &:active {
    color: #2ccac1;
  }
`;

export const Label = styled.span`
  margin-left: 17px;
  color: white;

  @media screen and (min-width: 768px) {
    margin-left: 27px;
  }

  @media screen and (min-width: 1024px) {
    margin-left: 12px;
  }
`;

export const IconContainer = styled.div`
  width: 26px;
  height: 26px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
  }

  @media screen and (min-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;
