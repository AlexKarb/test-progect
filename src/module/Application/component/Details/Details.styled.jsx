import styled from 'styled-components';
import { Field } from 'formik';
import { CheckBoxIcon } from '../TypeHelp/TypeHelp.styled';

export const Container = styled.div`
  margin-bottom: 12px;
`;

export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Textarea = styled(Field)`
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

export const DeliverBox = styled.label`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const DeliveryCheck = styled(Field)`
  position: absolute !important;
  clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
  padding: 0 !important;
  border: 0 !important;
  height: 1px !important;
  width: 1px !important;
  clip: rect(1px, 1px, 1px, 1px);
  overflow: hidden;

  &:checked + ${CheckBoxIcon} {
    background-color: var(--first-color-bg);
    color: white;
    border: none;
  }
`;
