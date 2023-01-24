import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  width: 230px;
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
  width: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ activeButton, agree, disagree }) => {
    if (agree && activeButton === 'left') {
      return 'var(--first-color-bg)';
    } else if (disagree && activeButton === 'right') {
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

  &:hover {
    background-color: #061588ab;
  }

  &:active {
    transform: scale(0.95);
  }

  @media screen and (min-width: 768px) {
    width: 175px;
    padding: 10px 0;
    font-size: 26px;
  }

  @media screen and (min-width: 1023px) {
    width: 175px;
    padding: 10px 0;
    font-size: 20px;
  }
`;
