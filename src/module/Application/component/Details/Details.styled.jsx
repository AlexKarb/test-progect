import styled from 'styled-components';
import { Field } from 'formik';

export const Container = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Textarea = styled(Field)`
  padding: 6px;
  border: 1px solid teal;
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

export const DeliverBox = styled.label`
  /* margin-bottom: 20px; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const DeliveryCheck = styled(Field)`
  margin-right: 8px;
`;
