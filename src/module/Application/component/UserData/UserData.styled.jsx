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

export const LabelText = styled.span`
  width: 55px;
  display: inline-block;
  flex-shrink: 0;
`;

export const Input = styled(Field)`
  width: 100%;
  margin-left: 10px;
  border: none;
  border-bottom: 1px solid #6b8cef6e;
  outline: none;
  padding: 1px 10px;

  &::placeholder {
    text-align: center;
    font-size: 10px;
    color: var(--unactive-color-bg);
  }

  @media screen and (min-width: 600px) {
    max-width: 100%;
  }
`;
