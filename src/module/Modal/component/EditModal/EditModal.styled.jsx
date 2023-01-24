import styled from 'styled-components';

import { StyledTitle } from '../Title/Title.styled';

export const EditTitle = styled(StyledTitle)`
  font-size: 24px;
  padding: 12px 30px;

  @media screen and (min-width: 1024px) {
    font-size: 22px;
    padding: 8px 30px;
  }
`;

export const Spiner = styled.div`
  position: absolute;
  top: 5px;
  right: 15px;
`;
