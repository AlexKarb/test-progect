import styled from 'styled-components';

// export const LeftSide = styled.div`
//   margin-bottom: 10px;
//   @media screen and (min-width: 1024px) {
//     margin-bottom: 0px;
//     margin-right: 30px;
//     width: 450px;
//   }
// `;

export const Item = styled.li`
  list-style: none;
  position: relative;
  width: 325px;
  min-height: 275px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  border: 1px solid green;
  padding: 10px 6px 10px 20px;
  font-size: 12px;
  box-shadow: 3px 3px 5px #00000033;

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
  justify-content: space-between;
  height: 253px;

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

  position: relative; //del
`;
