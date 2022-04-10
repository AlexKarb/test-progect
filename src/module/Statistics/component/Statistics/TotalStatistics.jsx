import { useEffect, useState } from 'react';
import { getLengthOfSortedPublication } from 'service/api-service';
import { StaticticsBox } from './StaticticsBox';
import { Wrapper, IconTotal } from './Statistics.styled';

export const TotalStatistics = () => {
  const [number, setNumber] = useState('');

  useEffect(() => {
    getLengthOfSortedPublication('All').then(setNumber);
  }, []);

  return (
    <Wrapper>
      <StaticticsBox
        number={number}
        title={'Загальна кількість:'}
        icon={<IconTotal />}
        width={'100%'}
      />
    </Wrapper>
  );
};
