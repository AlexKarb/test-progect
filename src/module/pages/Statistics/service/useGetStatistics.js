import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getRequest } from 'service/redux/request';

const initialState = {
  pending: 0,
  'in progress': 0,
  completed: 0,
  deleted: 0,
};

export const useGetStatistics = () => {
  const requestData = useSelector(getRequest);
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    setStatistics(
      requestData.reduce(
        (acc, { status }) => {
          acc[status]++;
          return acc;
        },
        { ...initialState }
      )
    );

    return () => {
      setStatistics(null);
    };
  }, [requestData]);

  return [statistics];
};
