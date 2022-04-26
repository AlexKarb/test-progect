import styled from 'styled-components';
import { Form } from 'formik';

export const StyledFormContainer = styled(Form)`
  display: flex;
  flex-direction: column;

  max-width: 355px;
  border-radius: ${({ type }) => (type === 'edit' ? '0' : '6px')};
  margin-left: auto;
  margin-right: auto;
  padding: 10px 15px;
  font-size: 14px;

  background-color: white;
  box-shadow: 0px 0px 10px 3px #b8b8b833;

  @media screen and (min-width: 600px) {
    max-width: 400px;
  }
`;
