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
    max-width: calc(100% - 200px);
    min-height: 208px;
    margin-left: 30px;
    margin-right: 0;
  }

  @media screen and (min-width: 1024px) {
    width: calc(100% - 160px);
    max-width: 1060px;
    display: flex;
  }

  @media screen and (min-width: 2220px) {
    padding: 30px;
    max-width: 1450px;
  }
`;

export const Block = styled.div`
  position: relative;

  @media screen and (min-width: 1024px) {
    width: 500px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
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
