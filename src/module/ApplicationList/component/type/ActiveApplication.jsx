import { ApplicationList } from '../ApplicationList/ApplicationList';
import { Main } from '../Utils/Main';
import { Title } from '../Utils/Title';

export const ActiveApplication = () => {
  return (
    <Main>
      <Title text={'Необроблені заявки '} />
      <ApplicationList type={'pending'} />
    </Main>
  );
};
