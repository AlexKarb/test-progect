import styled from 'styled-components';
import { Field } from 'formik';

export const Label = styled.span`
  width: 65px;
  display: inline-block;
  flex-shrink: 0;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    width: 120px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

export const Input = styled(Field).attrs(({ required = true }) => ({
  type: 'text',
  required,
  autoComplete: 'off',
}))`
  width: 100%;
  border: none;
  border-bottom: ${({ $formController }) => {
    const errors = $formController?.errors;
    const touched = $formController?.touched;

    const falseColor = '0.5px solid #ff0000';
    const defaultColor = '1px solid #6b8cef6e';

    if (!$formController?.isSubmitting) {
      const inValid = touched && errors && '0.5px solid #ff0000';
      return inValid || defaultColor;
    }

    if ($formController?.isSubmitting) {
      return errors ? falseColor : defaultColor;
    }
  }};

  outline: none;
  padding: 1px 10px;
  font-style: italic;

  @media screen and (min-width: 768px) {
    padding: 1px 20px;
    font-size: 22px;
  }

  @media screen and (min-width: 768px) {
    padding: 2px 20px;
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    padding: 2px 20px;
    font-size: 14px;
  }

  &::placeholder {
    text-align: center;
    font-size: 10px;
    color: var(--unactive-color-bg);

    @media screen and (min-width: 768px) {
      font-size: 15px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 12px;
    }
  }
`;
