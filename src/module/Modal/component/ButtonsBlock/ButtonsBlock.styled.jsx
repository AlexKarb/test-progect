import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Button = styled.button.attrs(prop => ({
  type: 'button',
}))`
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ action, agree, disagree }) => {
    if ((agree && action !== 'deleted') || (disagree && action === 'deleted')) {
      return 'var(--first-color-bg)';
    } else {
      return 'var(--main-text-color)';
    }
  }};

  border: none;
  padding: 8px 0;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 175px;
    padding: 10px 0;
    font-size: 26px;
  }
`;
