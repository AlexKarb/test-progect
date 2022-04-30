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

  &:hover {
    background-color: rgb(65 106 229);
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
    width: 280px;
    min-width: 110px;
    padding: 16px 7px;
  }
`;
