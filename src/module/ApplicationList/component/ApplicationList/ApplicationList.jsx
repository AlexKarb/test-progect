import { Card } from '../Card/Card';
import { NoFound } from '../../../Utils/NoFound/NoFound';
import { Container } from './ApplicationList.styled';
import Filter from 'module/Filter/Filter';
import { useFilterByType } from 'module/ApplicationList/hooks/useFilterByType';
import { useGetPublication } from 'module/ApplicationList/hooks/useGetPublication';
import { MainSpiner } from 'module/Spiner/MainSpiner';

export const ApplicationList = ({ type }) => {
  const [data, setChange] = useGetPublication(type);
  const [itemsOfList, toggleFilter, filter] = useFilterByType(data);

  return (
    <Container>
      <Filter filter={filter} toggleFilter={toggleFilter} />
      {!itemsOfList && <MainSpiner />}
      {itemsOfList &&
        itemsOfList.map(info => (
          <Card key={info.id} data={info} onChange={setChange} type={type} />
        ))}
      {itemsOfList?.length === 0 && <NoFound />}
    </Container>
  );
};
