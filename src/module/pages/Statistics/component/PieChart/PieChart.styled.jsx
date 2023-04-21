import styled from 'styled-components';

import { FilterIcon } from 'module/Filter/component/FilterIcon/FilterIcon';

export const FilterIcn = styled(FilterIcon)`
  width: 16px;
  height: 16px;
  fill: #afaff085;
  position: absolute;
  left: 14px;
  top: 72px;

  @media screen and (min-width: 768px) {
    left: 200px;
  }

  @media screen and (min-width: 1024px) {
    left: 160px;
  }

  @media screen and (min-width: 1250px) {
    left: 25px;
  }
`;

export const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ffffffda;
  padding: 30px;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 300px;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 1024px) {
    margin-bottom: 15px;
    width: 600px;
    height: 300px;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1250px) {
    margin-bottom: 15px;
    width: 400px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
