import { useEffect, useMemo, useState } from 'react';
import { getLengthOfSortedPublication, keysOfTypes } from 'service/api-service';

export const useGetStatistics = () => {
  const [number, setNumber] = useState(false);

  useEffect(() => {
    keysOfTypes().map(type =>
      getLengthOfSortedPublication(type).then(number =>
        setNumber(pS => ({
          ...pS,
          [type]: number,
        }))
      )
    );
  }, []);

  const isLoad = useMemo(
    () =>
      keysOfTypes()
        .map(type => number[type])
        .includes(undefined),

    [number]
  );

  return [number, isLoad];
};
