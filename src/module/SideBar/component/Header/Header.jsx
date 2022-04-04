import { Burger } from 'module/SideBar/component/Header/Burger/Burger';
import { HeaderContainer } from './Header.styled';
import { Logotype } from './Logotype/Logotype';

export const Header = ({ openSideBar }) => (
  <HeaderContainer>
    <Burger openSideBar={openSideBar} />
    <Logotype />
  </HeaderContainer>
);
