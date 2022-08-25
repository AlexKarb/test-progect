import styled from 'styled-components';
import { Field } from 'formik';
import { BsCheckLg } from 'react-icons/bs';

export const CheckBoxLabel = styled.label`
  font-size: 14px;
  margin-right: 8px;

  display: flex;

  align-items: center;
  flex-shrink: 0;
  width: ${({ width = 'auto' }) => width};
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 22px;
    width: ${({ width = 'auto' }) => (width === '160px' ? '260px' : width)};
    flex-direction: ${({ type }) =>
      type === 'filter' ? 'row-reverse' : 'row'};
  }

  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const CheckBoxIcon = styled(BsCheckLg)`
  color: transparent;
  margin-right: 8px;
  border: 1px solid ${prop => (prop.theme === 'ligth' ? 'grey' : 'white')};
  border-radius: 3px;
  padding: 2px;

  @media screen and (min-width: 768px) {
    margin-right: ${({ type }) => (type === 'filter' ? '0px' : '18px')};
    margin-left: ${({ type }) => (type === 'filter' ? '18px' : '0px')};
  }
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
