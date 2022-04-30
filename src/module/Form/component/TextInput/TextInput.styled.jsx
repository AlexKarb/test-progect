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
`;

export const Input = styled(Field).attrs(({ required = true }) => ({
  type: 'text',
  required,
  autoComplete: 'off',
}))`
  width: 100%;
  border: none;
  border-bottom: 1px solid #6b8cef6e;
  outline: none;
  padding: 1px 10px;

  @media screen and (min-width: 768px) {
    padding: 1px 20px;
    font-size: 22px;
  }

  &::placeholder {
    text-align: center;
    font-size: 10px;
    color: var(--unactive-color-bg);

    @media screen and (min-width: 768px) {
      font-size: 15px;
    }
  }
`;
