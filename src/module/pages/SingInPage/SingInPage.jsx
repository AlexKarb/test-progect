import { FormContainer, Container } from './SingInPage.styled';
import { Formik } from 'formik';
import { MainContainer } from 'module/Utils/MainContainer/MainContainer';
import { SingInSchema } from './Schema';
import { useState } from 'react';
import { FormSection, SubmitSection } from './component';
import { useAddOrganisationMutation } from 'service/redux/api/organisationApi';
import { useFormSubmit } from './service/formSubmit';

const initialFormValues = {
  name: '',
  email: '',
  login: '',
  password: '',
  doublePassword: '',
  captcha: '',
};

export const SingInPage = () => {
  const [showSectionSubmit, setShowSectionSubmit] = useState(false);
  const [addOrganisation, { isLoading }] = useAddOrganisationMutation();
  const formSubmit = useFormSubmit();

  const handleFormSubmit = (userData, optionForm) => {
    formSubmit({ userData, optionForm, addOrganisation }).then(() =>
      setShowSectionSubmit(false)
    );
  };

  return (
    <MainContainer>
      <Container>
        <Formik
          initialValues={initialFormValues}
          validationSchema={SingInSchema}
          onSubmit={handleFormSubmit}
        >
          {({ values, errors, touched, validateForm, submitForm }) => (
            <FormContainer>
              {!showSectionSubmit && (
                <FormSection
                  options={{ values, errors, touched }}
                  validateForm={validateForm}
                  setShowSectionSubmit={setShowSectionSubmit}
                />
              )}

              {showSectionSubmit && (
                <SubmitSection
                  formValues={values}
                  setShowSectionSubmit={setShowSectionSubmit}
                  isSubmiting={isLoading}
                  submitForm={submitForm}
                />
              )}
            </FormContainer>
          )}
        </Formik>
      </Container>
    </MainContainer>
  );
};
