import styled from 'styled-components';

export const StyledButton = styled.button`
  margin-left: 25px;
  width: 150px;
  height: 40px;

  color: #fff;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: #2234c0d0;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 110px;
    font-size: 18px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 14px;
    height: 30px;
  }

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    background-color: #475094b8;
  }
`;
