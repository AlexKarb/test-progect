import { Icon, StyledLink } from './GoBackButton.styled';

export const GoBackButton = ({ path }) => (
  <StyledLink to={path ? path : '/'} aria-label="повернутися назад">
    <Icon />
  </StyledLink>
);
