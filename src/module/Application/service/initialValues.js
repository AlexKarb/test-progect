import { servicesTypesObject } from 'service/dataFromServiceType';

export const initialValues = {
  contacts: {
    name: '',
    tel: '',
    adress: '',
  },
  typeHelp: [],
  additional: servicesTypesObject,
  delivery: false,
  info: '',
};
