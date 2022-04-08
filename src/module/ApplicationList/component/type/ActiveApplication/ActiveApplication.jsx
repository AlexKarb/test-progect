import { useEffect, useState } from 'react';
import { getPendingPublications } from 'service/api-service';
// import { exempleOfResponse } from 'service/del---exemple_of_res';
import { ApplicationList } from '../../ApplicationList/ApplicationList';

export const ActiveApplication = () => {
  return <ApplicationList type={'pending'} title={'Необроблені заявки '} />;
};
