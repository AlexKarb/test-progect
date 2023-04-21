import { MainContainerWithoutBg } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';
import { ApplicationList } from '../../ApplicationList';

const InProgressApplication = () => (
  <MainContainerWithoutBg>
    <Title text={'Заявки у роботі'} />
    <ApplicationList type="in progress" />
  </MainContainerWithoutBg>
);

export default InProgressApplication;
