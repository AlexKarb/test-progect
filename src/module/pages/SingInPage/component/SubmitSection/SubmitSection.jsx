import { MainSpiner } from 'module/Utils/MainSpiner/MainSpiner';
import { useState } from 'react';
import { GoBackBtn, ReCaptcha } from '..';

import { SubContainer, SubmitBtn, TextPS, Title, Wrapp } from '../../SingInPage.styled';

export const SubmitSection = ({
  formValues,
  setShowSectionSubmit,
  isSubmiting,
  submitForm,
}) => {
  const [validCaptcha, setValidCaptcha] = useState(false);

  return (
    <SubContainer>
      <GoBackBtn
        onClick={() => {
          setShowSectionSubmit(false);
          formValues.captcha = '';
        }}
      />

      {isSubmiting && <MainSpiner />}

      {!isSubmiting && (
        <>
          <Title>Ви підтверджуєте правильність введених данних?</Title>
          <Wrapp>
            <ReCaptcha
              setValues={text => (formValues.captcha = text)}
              setValidCaptcha={setValidCaptcha}
            />

            {validCaptcha === null && <TextPS>Перевірка ReCaptcha є обов'язковою</TextPS>}
          </Wrapp>
          <SubmitBtn
            onClick={() => {
              if (!validCaptcha) setValidCaptcha(null);
              submitForm();
            }}
            type="submit"
          >
            Відправити форму
          </SubmitBtn>
        </>
      )}
    </SubContainer>
  );
};
