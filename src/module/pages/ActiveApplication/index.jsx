import { MainContainer } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';
import { ApplicationList } from '../../ApplicationList';

const ActiveApplication = () => {
  return (
    <MainContainer>
      <Title text={'Необроблені заявки '} />
      <ApplicationList type={'pending'} />
    </MainContainer>
  );
};

export default ActiveApplication;
