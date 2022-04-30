import styled from 'styled-components';
import { Line } from '../../../Utils/Line/Line';

const Container = styled.div`
  padding-bottom: 7px;

  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }
`;

export const ContainerBlock = ({ line, children }) => (
  <Container>
    {children}
    {line && <Line />}
  </Container>
);
