import styled from 'styled-components';
import { Line } from '../../../Utils/Line/Line';

const Container = styled.div`
  padding-bottom: 7px;
`;

export const ContainerBlock = ({ line, children }) => (
  <Container>
    {children}
    {line && <Line />}
  </Container>
);