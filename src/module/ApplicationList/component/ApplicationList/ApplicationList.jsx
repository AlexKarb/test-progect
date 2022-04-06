import { Card } from '../Card/Card';
import { Container, Title } from './ApplicationList.styled';

export const ApplicationList = ({ data, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Container>
        {data && data.map(info => <Card key={info.id} data={info} />)}
      </Container>
    </>
  );
};
