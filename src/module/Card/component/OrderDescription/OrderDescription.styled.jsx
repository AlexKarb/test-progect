import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  padding-top: 7px;

  @media screen and (min-width: 1024px) {
    padding: 0 20px;
  }
`;

export const Label = styled.span`
  margin-right: 5px;
  color: #808080;
  flex-shrink: 0;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    margin-right: 25px;
  }
`;

export const Info = styled.p`
  font-size: 10px;
  padding: 2px 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
`;
