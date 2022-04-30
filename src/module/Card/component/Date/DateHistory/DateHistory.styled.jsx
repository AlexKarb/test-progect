import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

export const DateLabel = styled.span`
  margin-right: 5px;
  color: #808080;
  flex-shrink: 0;
  font-size: 10px;
  width: 115px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    width: 200px;
  }
`;

export const DateInfo = styled.p`
  font-size: 9px;
  padding: 2px 0;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const DateHistoryContainer = styled.ul`
  padding-top: 7px;
`;
