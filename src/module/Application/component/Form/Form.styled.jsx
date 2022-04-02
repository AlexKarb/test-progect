import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 350px;
  margin: 0 auto;
  border: 1px solid black;

  @media screen and (min-width: 600px) {
    max-width: 400px;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  max-width: 300px;

  @media screen and (min-width: 600px) {
    max-width: 100%;
  }
`;
