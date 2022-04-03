import { StyledButtonIcon } from './Button.styled';

export const ButtonIcon = ({ icon, type = 'button', onClick, children }) => (
  <StyledButtonIcon type={type} onClick={onClick}>
    {icon || children}
  </StyledButtonIcon>
);
