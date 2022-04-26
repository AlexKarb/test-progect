import { Formik } from 'formik';
import {
  Button,
  DetailsComment,
  TypeHelp,
  UserData,
  StyledFormContainer,
} from './component';

export const Form = ({ onSubmit, initialValues, type }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values: { typeHelp } }) => {
        return (
          <StyledFormContainer type={type}>
            <UserData />
            <TypeHelp selectedTypes={typeHelp} />
            <DetailsComment />
            <Button text={type === 'edit' ? 'Зберегти' : 'Зарегеструвати'} />
          </StyledFormContainer>
        );
      }}
    </Formik>
  );
};
