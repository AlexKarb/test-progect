import { StyledButton } from './Button.styled';

export const Button = ({ text = '', type = 'button', onClick, children }) => (
  <StyledButton type={type} onClick={onClick}>
    {text}
    {children}
  </StyledButton>
);
