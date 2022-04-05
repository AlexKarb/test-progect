import styled from 'styled-components';

export const LeftSide = styled.div`
  margin-bottom: 10px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0px;
    margin-right: 30px;
    width: 450px;
  }
`;

export const Block = styled.div`
  display: flex;
  padding: 20px;

  /* * {
    outline: 1px solid red;
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

export const Item = styled.li`
  width: 240px;
  height: 300px;
  display: flex;
  position: relative;
  border: 1px solid green;
  list-style: none;
  /* margin: 0 auto; */
  /* margin-right: 15px; */
  margin-bottom: 20px;
  padding: 10px 6px 10px 20px;
  width: 250px;
  font-size: 12px;
  box-shadow: 3px 3px 5px #00000033;

  @media screen and (min-width: 768px) {
    width: 330px;
  }
  @media screen and (min-width: 1024px) {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Main = styled.div`
  width: 184px;
`;
