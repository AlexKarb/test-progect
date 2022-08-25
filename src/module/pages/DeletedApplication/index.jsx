import { useLocation } from 'react-router-dom';
import { ApplicationList } from '../../ApplicationList';
import { GoBackButton } from '../../Utils/GoBackBtn/GoBackButton';
import { MainContainerBg } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';

const DeletedApplication = () => {
  let location = useLocation();

  return (
    <MainContainerBg>
      <GoBackButton path={location?.state?.from} />
      <Title text={'Видалені заявки '} />
      <ApplicationList type="deleted" />
    </MainContainerBg>
  );
};

export default DeletedApplication;
