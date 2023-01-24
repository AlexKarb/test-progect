import { useState } from 'react';
import { GoBackBtn, Info, Input } from '..';

import { useNavigateToLoginPage } from '../../hooks/useNavigateToLoginPage';
import { SubmitBtn, Title } from '../../SingInPage.styled';

export const FormSection = ({ options, validateForm, setShowSectionSubmit }) => {
  const navigateToLoginPage = useNavigateToLoginPage();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleSections = () => {
    setIsSubmitting(true);
    validateForm(options.values).then(e => {
      if (Object.keys(e).length === 1 && Object.keys(e).includes('captcha')) {
        setShowSectionSubmit(true);
      } else {
        setShowSectionSubmit(false);
      }
    });
  };

  return (
    <>
      <GoBackBtn onClick={navigateToLoginPage} />

      <Title>Введіть данні про компанію:</Title>
      <Info />

      <Input
        name="name"
        subscription="Назва організації"
        isSubmitting={isSubmitting}
        formController={options}
      />
      <Input
        name="email"
        subscription="Поштова скринька"
        isSubmitting={isSubmitting}
        formController={options}
      />
      <Input
        name="login"
        subscription="Логін адміністратора"
        isSubmitting={isSubmitting}
        formController={options}
      />
      <Input
        name="password"
        subscription="Пароль адміністратора"
        isSubmitting={isSubmitting}
        formController={options}
      />
      <Input
        name="doublePassword"
        subscription="Повторіть ваш пароль"
        formController={options}
        isSubmitting={isSubmitting}
      />

      <SubmitBtn type="button" onClick={toggleSections}>
        Зареєструватися
      </SubmitBtn>
    </>
  );
};
