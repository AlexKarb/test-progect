import { StyledButton } from './Button.styled';
import { LoaderIcon } from './LoaderIcon';

export const Button = ({
  text = '',
  type = 'button',
  isSubmitting = false,
  onClick,
}) => (
  <StyledButton type={type} onClick={onClick}>
    {isSubmitting ? <LoaderIcon /> : text}
  </StyledButton>
);
