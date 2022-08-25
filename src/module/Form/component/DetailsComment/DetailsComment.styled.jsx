import styled from 'styled-components';
import { Field } from 'formik';

export const Textarea = styled(Field).attrs(() => ({
  type: 'text',
  component: 'textarea',
  rows: '4',
}))`
  padding: 6px;
  border: 1px solid var(--first-color-bg);
  margin-top: 8px;
  border-radius: 3px;
  font-size: 14px;
  width: 100%;
  resize: none;
  font-style: italic;

  &::placeholder {
    font-size: 10px;
    color: var(--unactive-color-bg);

    @media screen and (min-width: 768px) {
      font-size: 17px;
    }

    @media screen and (min-width: 1014px) {
      font-size: 14px;
    }
  }

  &:focus {
    outline: 1px solid #030067;
  }

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    font-size: 22px;
    padding: 10px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 10px;
    font-size: 14px;
    padding: 6px 10px;
  }
`;
