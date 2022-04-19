import styled from 'styled-components';
import { Field } from 'formik';
import { BsCheckLg } from 'react-icons/bs';

export const CheckBoxIcon = styled(BsCheckLg)`
  color: transparent;
  margin-right: 8px;
  border: 1px solid ${prop => (prop.theame === 'ligth' ? 'grey' : 'white')};
  /* border: 1px solid white; */
  border-radius: 3px;
  padding: 2px;
`;

export const CheckBoxLabel = styled.label`
  margin-right: 8px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const Input = styled(Field)`
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
