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

  &:focus {
    outline: 1px solid #030067;
  }

  @media screen and (min-width: 600px) {
    max-width: 100%;
  }
`;
