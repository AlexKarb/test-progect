import { ButtonIcon } from 'module/Utils/Button/ButtonIcon';
import { BurgerIcon } from './Burger.styled';

export const Burger = ({ openSideBar }) => {
  return <ButtonIcon icon={<BurgerIcon />} onClick={() => openSideBar(true)} />;
};
