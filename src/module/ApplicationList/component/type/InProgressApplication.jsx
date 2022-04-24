import { ApplicationList } from '../ApplicationList/ApplicationList';
import { Main } from '../Utils/Main';
import { Title } from '../Utils/Title';

export const InProgressApplication = () => (
  <Main>
    <Title text={'Заявки у роботі'} />
    <ApplicationList type="in progress" />
  </Main>
);
