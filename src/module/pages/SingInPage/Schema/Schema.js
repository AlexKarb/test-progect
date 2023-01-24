import * as Yup from 'yup';
export const SingInSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Занадто коротке значення')
    .max(30, 'Дуже багато символів')
    .trim()
    .required("Поле являється обов'язковим"),
  email: Yup.string()
    .email()
    .min(10, 'Занадто коротке значення')
    .max(32, 'Дуже багато символів')
    .trim()
    .required("Поле являється обов'язковим"),

  login: Yup.string()
    .min(5, 'Занадто коротке значення')
    .max(12, 'Дуже багато символів')
    .trim()
    .required("Поле являється обов'язковим"),
  password: Yup.string()
    .min(6, 'Занадто коротке значення')
    .max(12, 'Дуже багато символів')
    .trim()
    .required("Поле являється обов'язковим"),
  doublePassword: Yup.string()
    .min(6, 'Занадто коротке значення')
    .max(12, 'Дуже багато символів')
    .trim()
    .required("Поле являється обов'язковим")
    .oneOf([Yup.ref('password')], 'Пароль не співпадає'),
  captcha: Yup.string().required(" Перевірка Капчи є обов'язковою"),
});
