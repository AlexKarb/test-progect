import { Container, StyledSpiner } from './MainSpiner.styled';

export const MainSpiner = ({ styled }) => (
  <Container $styled={styled}>
    <StyledSpiner height="100%" width="100%" />
  </Container>
);
