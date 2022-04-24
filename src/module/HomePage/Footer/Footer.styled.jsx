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
  line-height: 1.13;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapp = styled.div`
  font-size: 10px;
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

export const Text = styled.a`
  text-decoration: none;
  color: #b3bee1;
  cursor: pointer;
`;

export const MyLink = styled.span`
  margin-left: 3px;
  color: #ffffffb5;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
`;
