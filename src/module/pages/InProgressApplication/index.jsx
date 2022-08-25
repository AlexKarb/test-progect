import { MainContainerBg } from 'module/Utils/MainContainer/MainContainer';
import { Title } from 'module/Utils/Title/Title';
import { ApplicationList } from '../../ApplicationList';

const InProgressApplication = () => (
  <MainContainerBg>
    <Title text={'Заявки у роботі'} />
    <ApplicationList type="in progress" />
  </MainContainerBg>
);

export default InProgressApplication;
