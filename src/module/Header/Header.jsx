import { Burger } from 'module/Utils/Burger/Burger';
import { HeaderContainer, Title, Wrap } from './Header.styled';
import { Logotype } from 'module/Utils/Logotype/Logotype';

export const Header = ({ openSideBar }) => (
  <HeaderContainer>
    <Burger openSideBar={openSideBar} />
    <Wrap>
      <Title>"We are from Ukraine"</Title>
      <Logotype />
    </Wrap>
  </HeaderContainer>
);
