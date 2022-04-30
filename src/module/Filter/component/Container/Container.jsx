import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    position: fixed;
    right: 30px;
    top: 180px;
    align-items: flex-end;
    padding: 0;
    margin: 0;
  }
`;
