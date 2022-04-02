// import { postPublication } from './api-service';

export const exempleOfResponse = {
  id: '', // ид
  contacts: {
    name: '', // имя  "текст"
    tel: '', // контакт для связи  "текст"
    adress: '', // адресс проживания  "текст"
  },
  typeHelp: [],

  additional: {
    clothes_adult: '',
    clothes_child: '',
    food: '',
    children_food: '',
    diapers: '',
    hygiene: '',
    otherHelp: '',
  },

  delivery: true,
  info: '',

  dataAdd: '', // дата создания заявки  "дата"
  dataClose: '', // дата удаления заявки  "дата"
  deletedInfo: '', //почему удалили заявку  "текст"

  status: '', //"pending", "in progress", "completed", "deleted"
};

export const exempleOfResponse1 = {};

export const exempleOfResponse2 = {};
