import { Formik } from 'formik';
import { useState } from 'react';
import {
  Button,
  DetailsComment,
  TypeHelp,
  UserData,
  StyledFormContainer,
} from './component';
import { RequestSchema } from './service/Schema';

export const Form = ({ onSubmit, initialValues, type, isLoading = false }) => {
  const [onButtonSubmitClick, setOnButtonSubmitClick] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RequestSchema}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
        setOnButtonSubmitClick(false);
      }}
    >
      {({ values: { typeHelp }, errors, touched }) => {
        return (
          <StyledFormContainer type={type}>
            <>
              <UserData
                options={{ errors, touched, isSubmitting: onButtonSubmitClick }}
              />
              <TypeHelp
                options={{ errors, isSubmitting: onButtonSubmitClick }}
                selectedTypes={typeHelp}
              />
              <DetailsComment />
              <Button
                text={(() => {
                  if (isLoading) return 'Зачекайте...';
                  return type === 'edit' ? 'Зберегти' : 'Зарегеструвати';
                })()}
                onClick={() => setOnButtonSubmitClick(true)}
              />
            </>
          </StyledFormContainer>
        );
      }}
    </Formik>
  );
};
