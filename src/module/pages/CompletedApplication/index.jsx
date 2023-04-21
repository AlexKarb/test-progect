import { MainContainerWithoutBg } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';
import { useLocation } from 'react-router-dom';
import { ApplicationList } from '../../ApplicationList';
import { GoBackButton } from '../../Utils/GoBackBtn/GoBackButton';

const CompletedApplication = () => {
  let location = useLocation();

  return (
    <MainContainerWithoutBg>
      <GoBackButton path={location?.state?.from} />
      <Title text={'Виконані заявки '} />
      <ApplicationList type="completed" />
    </MainContainerWithoutBg>
  );
};

export default CompletedApplication;
