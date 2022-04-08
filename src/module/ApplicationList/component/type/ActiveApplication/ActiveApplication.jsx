import { ApplicationList } from '../../ApplicationList/ApplicationList';

export const ActiveApplication = () => {
  return <ApplicationList type={'pending'} title={'Необроблені заявки '} />;
};
