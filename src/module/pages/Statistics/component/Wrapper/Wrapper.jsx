import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 340px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin-top: 30px;
    width: 640px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 5px;
    width: 640px;
  }
`;
