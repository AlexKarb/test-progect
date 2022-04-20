import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  width: 180px;
  min-width: 110px;
  padding: 8px 4px;

  background-color: var(--first-color-bg);
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;

export const StyledButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
`;