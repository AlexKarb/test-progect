import styled from 'styled-components';
import { Form } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;

  max-width: 365px;
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px 20px;

  font-size: 12px;

  background-color: white;
  box-shadow: 0px 0px 10px 3px #b8b8b833;

  @media screen and (min-width: 600px) {
    max-width: 400px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
`;
