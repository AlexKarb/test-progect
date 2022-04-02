import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-wrap: wrap;
`;

export const CheckBox = styled(Field)`
  margin-top: 10px;
  margin-right: 5px;
`;

export const CheckBoxLabel = styled.label`
  margin-right: 30px;
`;

export const Input = styled(Field)`
  margin-top: 10px;
  max-width: 300px;

  @media screen and (min-width: 600px) {
    max-width: 100%;
  }
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Wrapper = styled.div``;
