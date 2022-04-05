import { exempleOfResponse } from 'service/del---exemple_of_res';
import { ApplicationList } from '../../ApplicationList/ApplicationList';

export const ActiveApplication = () => {
  return (
    <>
      {console.log('~ exempleOfResponse', exempleOfResponse)}
      тут буде знаходиться майбутній список активних заявок
      <ApplicationList data={exempleOfResponse} />
    </>
  );
};
