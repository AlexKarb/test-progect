import { StaticticsBox } from 'module/StaticticsBox/StaticticsBox';
import {
  IconActive,
  IconDeleted,
  IconDone,
  IconInProgress,
  IconTotal,
} from '../IconStatictics/IconStatictics';
import { Wrapper } from '../Wrapper/Wrapper';

export const WorkStatictics = ({ statistics }) => {
  const totalApp = Object.values(statistics).reduce((partialSum, a) => partialSum + a, 0);

  return (
    <Wrapper>
      <StaticticsBox
        number={totalApp}
        title={'Загальна кількість:'}
        icon={<IconTotal />}
        size={'large'}
      />
      <StaticticsBox
        title={'Активні:'}
        number={statistics.pending}
        icon={<IconActive />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'У роботі:'}
        number={statistics['in progress']}
        icon={<IconInProgress />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'Виконані:'}
        number={statistics.completed}
        icon={<IconDone />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'Видалені:'}
        number={statistics.deleted}
        icon={<IconDeleted />}
        size={'medium'}
      ></StaticticsBox>
    </Wrapper>
  );
};
