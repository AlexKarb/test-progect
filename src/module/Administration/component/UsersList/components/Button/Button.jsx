import { StyledButton } from './Button.styled';

export const Button = ({ onClick, text }) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);
