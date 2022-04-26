import { MainContainer } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';
import { ApplicationList } from '../../ApplicationList/component/ApplicationList/ApplicationList';

const InProgressApplication = () => (
  <MainContainer>
    <Title text={'Заявки у роботі'} />
    <ApplicationList type="in progress" />
  </MainContainer>
);

export default InProgressApplication;
