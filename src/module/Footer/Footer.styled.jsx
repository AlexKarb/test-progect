import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  padding: 14px;
  background-color: #385cc5;

  font-size: 12px;
  line-height: 1.13;
  color: #b3bee1;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding: 17px;
  }
`;

export const Text = styled.span`
  font-size: 10px;
  display: flex;
  align-items: center;
  margin-top: 3px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const MyLink = styled.a.attrs(prop => ({
  target: '_blank',
  rel: 'noreferrer',
}))`
  margin-left: 3px;
  font-weight: 700;
  color: #ffffffb5;
  text-decoration: none;
  cursor: pointer;
`;
