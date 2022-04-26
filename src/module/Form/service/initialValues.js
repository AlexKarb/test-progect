import { nameObjectTypeOfHelp } from 'service/typeOfHelp/dataFromTypeOfHelp';

export const initialValues = {
  contacts: {
    name: '',
    tel: '',
    adress: '',
  },
  typeHelp: [],
  additional: nameObjectTypeOfHelp(),
  delivery: false,
  info: '',
  dataClose: '',
  dataInProgress: '',
  dataCompleted: '',
  deletedInfo: '',
};
