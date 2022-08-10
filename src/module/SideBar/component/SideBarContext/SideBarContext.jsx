import { Navigation } from '../NavigationList/NavigationList';
import { Futter } from '../Futter/Futter';
import { UserInfo } from '../UserInfo/UserInfo';
import { Wrapper } from './SideBarContext.styled';

export const SideBarContext = ({ toClose }) => {
  return (
    <Wrapper>
      <UserInfo />
      <Navigation toClose={toClose} />

      <Futter />
    </Wrapper>
  );
};
