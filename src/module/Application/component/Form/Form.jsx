import { TypeHelp } from '../TypeHelp/TypeHelp';
import { Formik } from 'formik';
import { ButtonContainer, StyledForm } from './Form.styled';
import { UserData } from '../UserData/UserData';
import { Details } from '../Details/Details';
import { Button } from 'module/Utils/Button/Button';

export const Form = ({ onSubmit, initialValues }) => {
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
            <ButtonContainer>
              <Button
                type="submit"
                text={'Зарегеструвати'}
                isSubmitting={isSubmitting}
              />
            </ButtonContainer>
          </StyledForm>
        );
      }}
    </Formik>
  );
};
