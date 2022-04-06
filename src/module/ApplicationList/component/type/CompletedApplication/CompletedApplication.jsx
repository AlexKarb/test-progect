import { ApplicationList } from '../../ApplicationList/ApplicationList';

export const CompletedApplication = ({ data }) => {
  return <ApplicationList data={data} title={'Виконані заявки '} />;
};
