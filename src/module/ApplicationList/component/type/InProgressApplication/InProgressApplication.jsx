import { ApplicationList } from '../../ApplicationList/ApplicationList';

export const InProgressApplication = ({ data }) => {
  return <ApplicationList data={data} title={'Заявки у роботі '} />;
};
