import { ApplicationList } from '../ApplicationList/ApplicationList';
import { Title } from '../Utils/Title';

export const ActiveApplication = () => {
  return (
    <>
      <Title text={'Необроблені заявки '} />
      <ApplicationList type={'pending'} />;
    </>
  );
};
