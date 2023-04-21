import { FilterIcon } from 'module/Filter/component/FilterIcon/FilterIcon';
import styled from 'styled-components';

export const FilterIcn = styled(FilterIcon)`
  width: 16px;
  height: 16px;
  fill: #afaff085;

  position: absolute;
  left: 27px;
  top: 266px;

  @media screen and (min-width: 768px) {
    left: 220px;
  }

  @media screen and (min-width: 1024px) {
    left: 180px;
  }
`;

export const Container = styled.div`
  width: 300px;
  height: 300px;
  background-color: #ffffffda;
  padding: 10px 30px;
  color: #fff;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    width: 600px;
    height: 300px;
  }

  @media screen and (min-width: 1250px) {
    width: 600px;
    height: 300px;
    margin-right: 4px;
  }
`;

export const BntView = styled.button`
  & {
    position: absolute;
    right: 40px;
    top: 26px;
    width: 110px;
    height: 20px;
    background-color: transparent;
    border: none;
    padding: 3px;
    color: #2f4fbb;
    font-size: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ open }) => open && 'flex-direction: row-reverse;'}
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    height: 0.6px;
    width: ${({ open }) => (open ? '100px' : '80px')};
    background-color: #939bbd7d;
  }
`;

export const SpnArow = styled.span`
  color: #2f4fbb;
  padding-left: 5px;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ open }) => open && 'rotate: 180deg;'}
`;
