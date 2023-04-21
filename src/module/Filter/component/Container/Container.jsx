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
    position: absolute;
    width: 36px;
    right: 15px;
    top: 90px;
    align-items: flex-end;
    padding: 0;
    margin: 0;

    ${({ type }) => {
      if (type === 'completed' || type === 'deleted') {
        return ' top: 150px;';
      }
    }}
  }

  @media screen and (min-width: 1024px) {
    ${({ type }) => {
      if (type === 'completed' || type === 'deleted') {
        return ' top: 130px;';
      }
    }}
  }
`;
