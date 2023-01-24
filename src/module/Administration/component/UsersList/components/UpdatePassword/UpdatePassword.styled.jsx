import styled from 'styled-components';

export const EditIcon = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NewPassword = styled.input`
  width: 170px;
  height: 40px;
  border: none;
  border-bottom: 1px solid var(--first-color-bg);
  background-color: var(--accent-color-bg);
  background-color: transparent;
  margin-right: 5px;
  margin-bottom: 40px;
  padding: 3px 25px;

  &::placeholder {
    text-align: center;
    color: #7482e0ae;
    font-size: 13px;
  }

  &:focus {
    outline: none;
  }

  @media screen and (min-width: 768px) {
    width: 280px;
    font-size: 18px;

    &::placeholder {
      font-size: 16px;
    }
  }
`;
