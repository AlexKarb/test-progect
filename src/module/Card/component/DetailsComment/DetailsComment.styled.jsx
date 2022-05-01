import styled from 'styled-components';

export const Label = styled.span`
  margin-right: 5px;
  color: #808080;
  flex-shrink: 0;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }

  @media screen and (min-width: 2220px) {
    font-size: 20px;
  }
`;

export const Info = styled.p`
  font-size: 10px;
  padding: 2px 0;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 2220px) {
    font-size: 20px;
  }
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top: 10px;

  @media screen and (min-width: 1440px) {
    padding: 0 20px;
  }
`;
