import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background-color: #105cff;
  padding: 20px 5px;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 20px 40px;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 26px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SuperLink = styled(NavLink)`
  color: #d9ff00;
  text-decoration: none;
  padding: 3px 0;

  @media screen and (min-width: 768px) {
    margin-right: 50px;

    &:last-child {
      margin-right: 0;
    }
  }

  &.active {
    color: #ff8800e8;
  }
`;
