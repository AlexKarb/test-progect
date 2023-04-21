import {
  Input,
  SubmitBtn,
  Title,
  FormContainer,
  Container,
  Text,
  SLink,
  PasswordInput,
} from './LoginPage.styled';

import { Formik } from 'formik';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';
import { LoginSchema } from './Schema';
import { useState } from 'react';
import { useLogin } from './hooks/useLogin';
import { ButtonShowPass } from 'module/Utils/ButtonShowPass/ButtonShowPass';

export const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logining] = useLogin();

  const handleFormSubmit = async (value, { resetForm }) => {
    const login = value.login;
    const password = value.password;

    setIsSubmitting(true);

    await logining({ login, password });

    resetForm();
    setIsSubmitting(false);
  };

  return (
    <MainContainer>
      <Container>
        <Formik
          initialValues={{ login: '', password: '' }}
          validationSchema={LoginSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, errors, touched }) => (
            <FormContainer>
              <Title>Для продовження необхідно авторизуватися: </Title>

              <Input
                type="text"
                name="login"
                placeholder="Введіть логін"
                options={{
                  values: values.login,
                  errors: errors.login,
                  touched: touched.login,
                }}
              />
              <PasswordInput>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Пароль"
                  autoComplete="current-password"
                  options={{
                    values: values.password,
                    errors: errors.password,
                    touched: touched.password,
                  }}
                />

                <ButtonShowPass state={{ showPassword, setShowPassword }} />
              </PasswordInput>
              <SubmitBtn isSubmitting={isSubmitting} v={values} type="submit">
                {isSubmitting ? 'Зачекайте ...' : 'Увійти'}
              </SubmitBtn>
              <Text>
                Немає акаунта? <SLink to={'/singin'}>Зареєструйся тут!</SLink>
              </Text>
            </FormContainer>
          )}
        </Formik>
      </Container>
    </MainContainer>
  );
};
