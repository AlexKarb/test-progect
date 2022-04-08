import { TypeHelp } from '../TypeHelp/TypeHelp';
import { Formik } from 'formik';

import { StyledForm } from './Form.styled';
import { initialValues } from 'module/Application/service/initialValues';
import { UserData } from '../UserData/UserData';
import { Details } from '../Details/Details';
import { Button } from 'module/Utils/Button/Button';

export const Form = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
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