import { useEffect, useState } from 'react';
import { editPublication, getSortedPublications } from 'service/api-service';

export const useGetPublication = type => {
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
