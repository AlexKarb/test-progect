import { Burger } from 'module/Utils/Burger/Burger';
import { HeaderContainer } from './Header.styled';
import { Logotype } from 'module/Utils/Logotype/Logotype';

export const Header = ({ openSideBar }) => (
  <HeaderContainer>
    <Burger openSideBar={openSideBar} />
    <Logotype />
  </HeaderContainer>
);
