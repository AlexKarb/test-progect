import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  padding: 28px 0px 28px 10px;
  overflow-y: auto;
  background: var(--Linear-bg);
  flex-shrink: 0;
  flex-grow: 1;

  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(Link)`
  height: 54px;
  padding-left: 9px;
  text-decoration: none;
  color: #2ccac1;
  display: flex;
  align-items: center;
  border-radius: 5px 0 0 5px;

  &:hover,
  &:active {
    background-color: var(--hover-color-bg);
  }

  @media screen and (min-width: 768px) {
    height: 90px;
  }

  @media screen and (min-width: 1024px) {
    height: 60px;
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
