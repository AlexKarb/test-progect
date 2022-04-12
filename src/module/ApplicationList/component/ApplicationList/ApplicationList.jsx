import { useGetPublication } from 'module/ApplicationList/hooks/useGetPublication';
import { Card } from '../Card/Card';
import { NoFound } from '../Utils/NoFound';
import { Container } from './ApplicationList.styled';

export const ApplicationList = ({ type }) => {
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
    <Container>
      {data &&
        data.map(info => (
          <Card key={info.id} data={info} onChange={setChange} type={type} />
        ))}
      {data?.length === 0 && <NoFound />}
    </Container>
  );
};
