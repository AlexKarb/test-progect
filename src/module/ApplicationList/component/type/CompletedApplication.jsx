import { useLocation } from 'react-router-dom';
import { ApplicationList } from '../ApplicationList/ApplicationList';
import { GoBackButton } from '../../../Utils/GoBackBtn/GoBackButton';
import { Title } from '../Utils/Title';
import { Main } from '../Utils/Main';

const CompletedApplication = () => {
  let location = useLocation();

  return (
    <Main>
      <GoBackButton path={location?.state?.from} />
      <Title text={'Виконані заявки '} />
      <ApplicationList type="completed" />
    </Main>
  );
};

export default CompletedApplication;
