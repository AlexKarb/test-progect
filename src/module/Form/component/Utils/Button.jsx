import { Button as MainButton } from 'module/Utils/Button/Button';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  margin-top: 12px;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    margin-top: 12px;
  }
`;

export const Button = ({ text }) => (
  <ButtonContainer>
    <MainButton type="submit" text={text} />
  </ButtonContainer>
);
