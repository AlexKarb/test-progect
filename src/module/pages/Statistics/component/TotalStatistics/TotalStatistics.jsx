import { StaticticsBox } from 'module/StaticticsBox/StaticticsBox';
import { IconTotal } from '../IconStatictics/IconStatictics';
import { Wrapper } from '../Wrapper/Wrapper';

export const TotalStatistics = ({ number }) => {
  return (
    <Wrapper>
      <StaticticsBox
        number={number}
        title={'Загальна кількість:'}
        icon={<IconTotal />}
        size={'large'}
      />
    </Wrapper>
  );
};
