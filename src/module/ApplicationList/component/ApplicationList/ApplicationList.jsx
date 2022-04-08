import { useEffect, useState } from 'react';
import { editPublication, getSortedPublications } from 'service/api-service';
import { Card } from '../Card/Card';
import { Container, Title } from './ApplicationList.styled';

const useGetPublication = type => {
  const [change, setChange] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    getSortedPublications(type).then(setData);
  }, [type]);

  useEffect(() => {
    (async function () {
      if (change) {
        await editPublication(change.id, change.data);
        await getSortedPublications(type).then(setData);
      }
    })();
  }, [change, type]);

  return [data, setChange];
};

export const ApplicationList = ({ type, title }) => {
  const [data, setChange] = useGetPublication(type);

  //   const [filters, setFilter] = useState([]);
  //   const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     setItems(data);
  //     const filteredItems = data?.filter(({ type }) =>
  //       filters.every(filter => type.includes(filter))
  //     );
  //     setItems(filteredItems);
  //   }, [data, filters]);

  return (
    <>
      <Title>{title}</Title>
      <Container>
        {data &&
          data.map(info => (
            <Card key={info.id} data={info} onChange={setChange} type={type} />
          ))}
      </Container>
    </>
  );
};
