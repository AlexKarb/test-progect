import styled from 'styled-components';

export const Container = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--unactive-color-bg);
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Info = styled.div`
  display: none;
  position: absolute;
  left: -20px;
  bottom: 28px;
  width: 60px;
  padding: 3px;
  box-shadow: -1px 0px 5px #00000033;
  font-size: 8px;
  border-radius: 5px;
  background-color: #fff;
`;
