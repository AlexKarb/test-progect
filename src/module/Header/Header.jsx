import { SideBarElement } from 'module/SideBar/component';
import {
  HeaderContainer,
  Logotype,
  Arm,
  WhiteBlock,
  Heart,
} from './Header.styled';

export const Header = () => (
  <HeaderContainer>
    <SideBarElement />

    <Logotype>
      <Arm />
      <WhiteBlock />
      <Heart />
    </Logotype>
  </HeaderContainer>
);
