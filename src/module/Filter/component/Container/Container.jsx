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

  @media screen and (min-width: 540px) {
    flex-direction: row;
    justify-content: flex-start;
    height: 90px;
    width: 504px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 44px;
  }
`;
