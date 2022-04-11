import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  margin: 10px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 25px;
  justify-content: space-between;
`;

export const CheckBoxLabel = styled.label`
  margin-right: 8px;
  display: flex;
  align-items: center;
`;

export const CheckBox = styled(Field)`
  margin-right: 5px;
`;

export const Input = styled(Field)`
  width: 145px;
  border: none;
  border-bottom: 1px solid #2857e2;
  outline: none;
  padding: 1px 10px;

  &::placeholder {
    text-align: center;
    font-size: 9px;
    color: var(--unactive-color-bg);
  }

  @media screen and (min-width: 600px) {
    max-width: 100%;
  }
`;
