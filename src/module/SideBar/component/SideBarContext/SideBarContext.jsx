import { Navigation } from '../NavigationList/NavigationList';
import { Futter } from '../Futter/Futter';
import { UserInfo } from '../UserInfo/UserInfo';
import { Wrapper } from './SideBarContext.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedInValue } from 'service/redux/auth/authSlice';

export const SideBarContext = ({ toClose }) => {
  const isLoggin = useSelector(getIsLoggedInValue);

  return (
    <Wrapper>
      <UserInfo />
      <Navigation toClose={toClose} />
      {isLoggin && <Futter toClose={toClose} />}
    </Wrapper>
  );
};
