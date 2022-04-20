import { useLocation } from 'react-router-dom';
import { ApplicationList } from '../ApplicationList/ApplicationList';
import { GoBackButton } from '../../../Utils/GoBackBtn/GoBackButton';
import { Title } from '../Utils/Title';

export const CompletedApplication = () => {
  let location = useLocation();

  return (
    <>
      <GoBackButton path={location?.state?.from} />
      <Title text={'Виконані заявки '} />
      <ApplicationList type="completed" />
    </>
  );
};
