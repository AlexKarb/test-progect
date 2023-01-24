import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Name = styled.div`
  width: 140px;
  font-size: 16px;
  font-weight: 500;

  padding-left: 10px;
  color: #fff;
  text-shadow: 0px 0px 6px #0000a3;
  display: list-item;

  @media screen and (min-width: 768px) {
    width: 200px;
    font-size: 23px;
    padding-left: 25px;
  }

  @media screen and (min-width: 1024px) {
    width: 140px;
    font-size: 16px;
    padding-left: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 60px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    width: auto;
  }
`;
