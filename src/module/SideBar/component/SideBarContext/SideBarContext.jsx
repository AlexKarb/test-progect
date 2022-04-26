import { Navigation } from '../NavigationList/NavigationList';
import { Futter } from '../Futter/Futter';
import { UserInfo } from '../UserInfo/UserInfo';
import { Container, Wrapper } from './SideBarContext.styled';

export const SideBarContext = ({ toClose }) => {
  return (
    <Wrapper>
      <Container>
        <UserInfo />
        <Navigation toClose={toClose} />
      </Container>
      <Futter />
    </Wrapper>
  );
};
