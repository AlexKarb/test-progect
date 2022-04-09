import { TypeHelp } from '../TypeHelp/TypeHelp';
import { Formik } from 'formik';
import { StyledForm } from './Form.styled';
import { UserData } from '../UserData/UserData';
import { Details } from '../Details/Details';
import { Button } from 'module/Utils/Button/Button';

export const Form = ({ onSubmit, initialValues, closeModal }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
        if (closeModal) closeModal();
      }}
    >
      {({ values, isSubmitting }) => {
        return (
          <StyledForm>
            <UserData />
            <TypeHelp selectedTypes={values.typeHelp} />
            <Details />
            <Button
              type="submit"
              text={'Зарегеструвати'}
              isSubmitting={isSubmitting}
            />
          </StyledForm>
        );
      }}
    </Formik>
  );
};
