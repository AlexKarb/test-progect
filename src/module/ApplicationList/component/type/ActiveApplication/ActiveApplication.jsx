import { useEffect, useState } from 'react';
import { getPendingPublications } from 'service/api-service';
import { exempleOfResponse } from 'service/del---exemple_of_res';
import { ApplicationList } from '../../ApplicationList/ApplicationList';

export const ActiveApplication = () => {
  const [data, setData] = useState();
  //   const [filters, setFilter] = useState([]);
  //   const [items, setItems] = useState([]);

  //   useEffect(() => {
  //     setItems(data);
  //     const filteredItems = data?.filter(({ type }) =>
  //       filters.every(filter => type.includes(filter))
  //     );
  //     setItems(filteredItems);
  //   }, [data, filters]);

  useEffect(() => {
    getPendingPublications().then(setData);
  }, []);

  return <ApplicationList data={data} title={'Необроблені заявки '} />;
};
