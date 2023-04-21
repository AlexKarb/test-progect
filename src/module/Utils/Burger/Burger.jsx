import { useSelector } from 'react-redux';
import { getIsLoggedInValue } from 'service/redux/auth';
import { BurgerIcon, StyledButtonIcon } from './Burger.styled';

export const Burger = ({ openSideBar }) => {
  const isLoggedIn = useSelector(getIsLoggedInValue);

  return isLoggedIn ? (
    <StyledButtonIcon type="button" onClick={() => openSideBar(true)}>
      <BurgerIcon />
    </StyledButtonIcon>
  ) : (
    <div></div>
  );
};
