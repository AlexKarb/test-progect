import { lazy } from 'react';

const loadable = path => {
  return lazy(() => import(`../${path}`));
};

export default loadable;
