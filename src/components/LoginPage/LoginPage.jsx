import { FormContainer } from 'components/FormContainer/FormContainer';
import { Input, SubmitBtn, Title } from './LoginPage.styled';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../redux/authSlice';

import userBase from '../Service/login.json';
import { notifyError, notifySuccess } from 'components/Toaster/Toaster';

const userLoggining = (name, password) => {
  const isNameInBase = Object.keys(userBase).includes(name);
  const passwordVerified = userBase[name]?.password === password;
  const role = userBase[name]?.role;

  return new Promise((resolve, reject) => {
    if (isNameInBase && passwordVerified) {
      resolve({ name, role });
    } else {
      reject();
    }
  });
};

export const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const password = form.elements.password.value;
    userLoggining(name, password)
      .then(data => {
        dispatch(logIn(data));
        notifySuccess(name, data.role);
        // navigate('/home', { replace: true });
      })
      .catch(notifyError);
    form.reset();
  };

  return (
    <FormContainer onSubmit={handleFormSubmit}>
      <Title>Для продовження необхідно авторизуватися:</Title>
      <Input
        type="text"
        name="name"
        placeholder="Введіть логін"
        required
        maxlength="12"
      />
      <Input
        type="password"
        name="password"
        placeholder="Пароль"
        required
        minlength="4"
        maxlength="8"
        size="8"
      />
      <SubmitBtn type="submit">Увійти</SubmitBtn>
    </FormContainer>
  );
};
