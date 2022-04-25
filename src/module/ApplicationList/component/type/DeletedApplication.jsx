import { useLocation } from 'react-router-dom';
import { ApplicationList } from '../ApplicationList/ApplicationList';
import { GoBackButton } from '../../../Utils/GoBackBtn/GoBackButton';
import { Title } from '../Utils/Title';
import { Main } from '../Utils/Main';

const DeletedApplication = () => {
  let location = useLocation();

  return (
    <Main>
      <GoBackButton path={location?.state?.from} />
      <Title text={'Видалені заявки '} />
      <ApplicationList type="deleted" />
    </Main>
  );
};

export default DeletedApplication;
