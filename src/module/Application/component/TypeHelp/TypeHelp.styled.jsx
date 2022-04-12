import styled from 'styled-components';
import { Field } from 'formik';
import { BsCheckLg } from 'react-icons/bs';

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

export const CheckBoxIcon = styled(BsCheckLg)`
  color: white;
  margin-right: 8px;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 2px;
`;

export const CheckBoxLabel = styled.label`
  margin-right: 8px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const CheckBox = styled(Field)`
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

export const Input = styled(Field)`
  width: 145px;
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
