import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  position: relative;
  max-width: 365px;
  background-color: white;
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px 20px;
  box-shadow: 0px 0px 10px 3px #b8b8b833;

  @media screen and (min-width: 768px) {
    max-width: 540px;
    min-height: 208px;
    margin-left: 30px;
    margin-right: 0;
  }

  @media screen and (min-width: 1024px) {
    width: 1000px;
  }
`;

export const Block = styled.div`
  position: relative;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;

    justify-content: flex-end;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
  } */
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Main = styled.div`
  margin-bottom: 18px;
`;
