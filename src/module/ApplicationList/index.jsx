import { useToggleFilter } from 'module/Filter/hooks/useToggleFilter';
import { Card } from '../Card';
import { NoFound } from '../Utils/NoFound/NoFound';
import { Container } from './component/Container/Container.styled';
import { Filter } from 'module/Filter';
import { useGetPublication } from 'module/ApplicationList/hooks/useGetPublication';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';

export const ApplicationList = ({ type }) => {
  const [filter, toggleFilter] = useToggleFilter();
  const [itemsOfList] = useGetPublication(type, filter);

  return (
    <Container>
      <Filter filter={filter} type={type} toggleFilter={toggleFilter} />
      {!itemsOfList && <MainSpiner />}

      {itemsOfList &&
        itemsOfList.map(info => <Card key={info._id} data={info} type={type} />)}

      {itemsOfList?.length === 0 && <NoFound />}
    </Container>
  );
};
