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

  @media screen and (min-width: 768px) {
    max-width: 610px;
    width: 610px;
    padding: 30px 30px;
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 30px;
  }
`;
