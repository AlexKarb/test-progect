import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 12px;
`;

export const Input = styled(Field)`
  width: 268px;
  margin-left: 10px;
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
