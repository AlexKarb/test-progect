import { StyledButton } from './Button.styled';
import { LoaderIcon } from './LoaderIcon';

export const Button = ({
  text = '',
  type = 'button',
  isSubmitting = false,
  onClick,
  children,
}) => (
  <StyledButton type={type} onClick={onClick}>
    {text && (isSubmitting ? <LoaderIcon /> : text)}
    {!text && children}
  </StyledButton>
);
