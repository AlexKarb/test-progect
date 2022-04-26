import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.nav`
  padding: 28px 0 0 0;
  overflow-y: auto;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(Link)`
  margin-bottom: 8px;

  text-decoration: none;
  color: #2ccac1;
  display: flex;
  align-items: center;
  padding: 10px 28px 10px 14px;

  &:hover,
  &:active {
    background-color: var(--hover-color-bg);
  }
`;

export const Label = styled.span`
  margin-left: 17px;
  color: white;
`;

export const IconContainer = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
