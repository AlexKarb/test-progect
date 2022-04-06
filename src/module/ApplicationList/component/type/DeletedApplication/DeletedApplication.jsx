import { ApplicationList } from '../../ApplicationList/ApplicationList';

export const DeletedApplication = ({ data }) => {
  return <ApplicationList data={data} title={'Видалені заявки '} />;
};
