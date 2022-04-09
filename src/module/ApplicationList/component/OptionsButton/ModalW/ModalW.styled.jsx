import styled from 'styled-components';

export const Container = styled.div`
  width: 230px;
  padding: 10px;
`;
export const Title = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
export const Button = styled.button`
  width: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ type }) =>
    type === 'active' ? 'var(--first-color-bg)' : 'var(--main-text-color)'};
  border: none;
  padding: 8px 0;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
`;
