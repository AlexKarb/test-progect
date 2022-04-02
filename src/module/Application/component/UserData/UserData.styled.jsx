import styled from 'styled-components';
import { Field } from 'formik';

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
