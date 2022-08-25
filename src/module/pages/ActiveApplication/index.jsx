import { MainContainerBg } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';
import { ApplicationList } from '../../ApplicationList';

const ActiveApplication = () => {
  return (
    <MainContainerBg>
      <Title text={'Необроблені заявки '} />
      <ApplicationList type={'pending'} />
    </MainContainerBg>
  );
};

export default ActiveApplication;
