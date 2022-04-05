// import { postPublication } from './api-service';

export const exempleOfResponse = {
  id: '1', // ид
  contacts: {
    name: 'Толя', // имя  "текст"
    tel: '0442354499', // контакт для связи  "текст"
    adress: 'Киев, ул. победі 125, 78кв', // адресс проживания  "текст"
  },
  typeHelp: [
    'підгузки',
    'засоби гігієни',
    'одяг для дорослих',
    'одяг для дітей',
    'їжа',
    'дитяче харчування',
    'інший тип',
  ],

  additional: {
    clothes_adult: 'М',
    clothes_child: '120см',
    food: 'крупа',
    children_food: 'пюре',
    diapers: '3',
    hygiene: 'дезик',
    otherHelp: 'незнаю',
  },

  delivery: true,
  info: 'хочу доставку зранку',

  dataAdd: '24.03.25', // дата создания заявки  "дата"
  dataClose: '', // дата удаления заявки  "дата"
  deletedInfo: '', //почему удалили заявку  "текст"

  status: 'pending', //"pending", "in progress", "completed", "deleted"
};

export const exempleOfResponse1 = {};

export const exempleOfResponse2 = {};
