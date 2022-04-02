// MdVolunteerActivism; иконка волонтера

import { CopySymbol, Link, Container } from './CreatedBy.styled';

export const CreatedBy = () => (
  <Container>
    <CopySymbol>&#169; </CopySymbol>
    <Link href="https://github.com/AlexKarb" target="_blank" rel="noreferrer">
      Додаток <br /> створено <br /> AlexKarb
    </Link>
  </Container>
);
