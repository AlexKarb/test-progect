import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  padding: 28px 28px 28px 14px;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(Link)`
  margin-bottom: 28px;
  text-decoration: none;
  color: #2ccac1;
  display: flex;
  align-items: center;

  &:hover,
  &:active {
    background-color: var(--hover-color-bg);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const Label = styled.span`
  margin-left: 17px;
  color: white;

  @media screen and (min-width: 768px) {
    margin-left: 27px;
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
`;
