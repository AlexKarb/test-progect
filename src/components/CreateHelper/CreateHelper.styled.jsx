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

export const CheckBoxContainer = styled.div`
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

export const DeliverBox = styled.label`
  margin-bottom: 20px;
`;
export const DeliveryCheck = styled(Field)`
  margin-right: 8px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  padding: 20px;
  text-align: center;
`;
