import { ApplicationList } from '../ApplicationList/ApplicationList';
import { Title } from '../Utils/Title';

export const InProgressApplication = () => (
  <>
    <Title text={'Заявки у роботі'} />
    <ApplicationList type="in progress" />
  </>
);
