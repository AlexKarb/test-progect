import { useEffect, useRef, useState } from 'react';
import { filteringItems } from '../Filter/hooks/filteringItems';
import { useToggleFilter } from 'module/Filter/hooks/useToggleFilter';
import { Card } from '../Card';
import { NoFound } from '../Utils/NoFound/NoFound';
import { Container } from './component/Container/Container.styled';
import { Filter } from 'module/Filter';
import { useGetPublication } from 'module/ApplicationList/hooks/useGetPublication';
import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';

export const ApplicationList = ({ type }) => {
  const [itemsOfList, setItemsOfList] = useState();
  const [data, setChange] = useGetPublication(type);
  const [filter, toggleFilter] = useToggleFilter();

  useEffect(() => {
    const sorted = filteringItems(data, filter);
    setItemsOfList(sorted || data);
  }, [data, filter]);

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
