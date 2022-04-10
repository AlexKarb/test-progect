import { StatiscticsWork } from './StatiscticsWork';
import { Container, Title } from './Statistics.styled';
import { TotalStatistics } from './TotalStatistics';

export const Statistics = () => (
  <Container>
    <Title>Статистика роботи</Title>
    <TotalStatistics />
    <StatiscticsWork />
  </Container>
);
