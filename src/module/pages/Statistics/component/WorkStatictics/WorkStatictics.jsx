import { StaticticsBox } from 'module/StaticticsBox/StaticticsBox';
import {
  IconActive,
  IconDeleted,
  IconDone,
  IconInProgress,
} from '../IconStatictics/IconStatictics';
import { Wrapper } from '../Wrapper/Wrapper';

export const WorkStatictics = ({ number }) => {
  return (
    <Wrapper>
      <StaticticsBox
        title={'Активні:'}
        number={number.pending}
        icon={<IconActive />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'У роботі:'}
        number={number['in progress']}
        icon={<IconInProgress />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'Виконані:'}
        number={number.completed}
        icon={<IconDone />}
        size={'medium'}
      ></StaticticsBox>

      <StaticticsBox
        title={'Видалені:'}
        number={number.deleted}
        icon={<IconDeleted />}
        size={'medium'}
      ></StaticticsBox>
    </Wrapper>
  );
};
