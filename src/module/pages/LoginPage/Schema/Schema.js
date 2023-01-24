import * as Yup from 'yup';

export const LoginSchema = Yup.object().shape({
  login: Yup.string()
    .min(5, '*Занадто коротке значення')
    .max(15, '*Дуже багато символів')
    .required("*Поле являється обов'язковим"),
  password: Yup.string()
    .min(6, '*Занадто коротке значення')
    .max(15, '*Дуже багато символів')
    .required("*Поле являється обов'язковим"),
});
