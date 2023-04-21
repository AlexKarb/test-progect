import { MainContainerWithoutBg } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';
import { ApplicationList } from '../../ApplicationList';

const ActiveApplication = () => {
  return (
    <MainContainerWithoutBg>
      <Title text={'Необроблені заявки '} />
      <ApplicationList type={'pending'} />
    </MainContainerWithoutBg>
  );
};

export default ActiveApplication;
