import * as Yup from 'yup';

export const RequestSchema = Yup.object().shape({
  contacts: Yup.object().shape({
    name: Yup.string()
      .min(2, '*Занадто коротке значення')
      .max(20, '*Дуже багато символів')
      .required("*Поле являється обов'язковим"),

    tel: Yup.string()
      .min(4, '*Занадто коротке значення')
      .max(20, '*Дуже багато символів')
      .required("*Поле являється обов'язковим"),

    adress: Yup.string()
      .min(2, '*Занадто коротке значення')
      .max(30, '*Дуже багато символів')
      .required("*Поле являється обов'язковим"),
  }),

  delivery: Yup.boolean(),
  info: Yup.string(),

  typeHelp: Yup.array().of(Yup.string()).min(1, '*Оберіть значення!'),

  additional: Yup.object(),
});
