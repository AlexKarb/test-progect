import { useLocation } from 'react-router-dom';
import { ApplicationList } from '../ApplicationList/ApplicationList';
import { GoBackButton } from '../Utils/GoBackButton';
import { Title } from '../Utils/Title';

export const DeletedApplication = () => {
  let location = useLocation();

  return (
    <>
      <GoBackButton path={location.state.from} />
      <Title text={'Видалені заявки '} />
      <ApplicationList type="deleted" />
    </>
  );
};
