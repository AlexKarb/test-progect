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

export const Form = ({ onSubmit, initialValues, type, isLoading = false, onClose }) => {
  const [isSubmitClick, setIsSubmitClick] = useState(false);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={RequestSchema}
      onSubmit={async (values, { resetForm }) => {
        await onSubmit(values);
        if (type !== 'edit') resetForm();
        onClose && onClose();
      }}
    >
      {({ values, errors, touched }) => {
        return (
          <StyledFormContainer type={type}>
            <>
              <UserData options={{ errors, touched, isSubmitting: isLoading }} />

              <TypeHelp
                isSubmitClick={isSubmitClick}
                options={{ errors, isSubmitting: isLoading }}
                selectedTypes={values.typeHelp}
              />
              <DetailsComment />

              <Button
                onClick={() => setIsSubmitClick(true)}
                text={(() => {
                  if (isLoading) return 'Зачекайте...';
                  if (type !== 'edit' && !isLoading) return 'Зарегеструвати';
                  if (type === 'edit') return 'Зберегти';
                })()}
              />
            </>
          </StyledFormContainer>
        );
      }}
    </Formik>
  );
};
