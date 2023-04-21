import { Container, ExclamationPoint, Text } from './NoFound.styled';

export const NoFound = ({ text = 'заявок не знайдено' }) => (
  <Container>
    <ExclamationPoint />
    <Text>{text}</Text>
  </Container>
);
