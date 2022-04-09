import styled from 'styled-components';

export const Item = styled.li`
  list-style: none;
  position: relative;
  width: 325px;
  background-color: #9aadff33;
  /* min-height: 275px; */
  border-radius: 6px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding: 10px 6px 10px 20px;
  font-size: 12px;
  box-shadow: 0px 0px 6px 3px #71717133;

  @media screen and (min-width: 768px) {
    width: 625px;
    min-height: 220px;
  }

  @media screen and (min-width: 1024px) {
    width: 1000px;
  }

  /* * {
    outline: 1px solid red;
  } */
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* height: 253px; */

  @media screen and (min-width: 768px) {
    flex-direction: column-reverse;

    justify-content: flex-end;
  }

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
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
  /* width: 184px; */
  margin-bottom: 18px;
  position: relative; //del
`;
