import { BurgerIcon, StyledButtonIcon } from './Burger.styled';

export const Burger = ({ openSideBar }) => {
  return (
    <StyledButtonIcon type="button" onClick={() => openSideBar(true)}>
      <BurgerIcon />
    </StyledButtonIcon>
  );
};
