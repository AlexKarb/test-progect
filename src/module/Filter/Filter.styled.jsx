import styled from 'styled-components';
import { FaBabyCarriage } from 'react-icons/fa';
import { BiFilterAlt } from 'react-icons/bi';

export const Container = styled.div`
  padding: 10px 30px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: white;
  font-size: 16px;
  margin-bottom: 20px;
  border-radius: 8px;

  @media screen and (min-width: 540px) {
    flex-direction: row;
    justify-content: flex-start;
    height: 90px;
    width: 504px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 100%;
    height: 44px;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
  width: 140px;
`;

export const ContainerBox = styled.div`
  display: flex;
  justify-content: space-around;

  &:first-child {
    margin-bottom: 4px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 10px;
`;
export const AddBox = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid;
  padding: 8px;
  border-radius: 5px;
`;

export const BabyIcon = styled(FaBabyCarriage)`
  color: white;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin: 0 4px;
`;

export const FilterIcon = styled(BiFilterAlt).attrs(pr => ({
  color: pr.isopen === 'open' ? 'var(--unactive-color-bg)' : 'white',
}))`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 24px;
  top: 12px;
  color: white;
  /* color: ${{}}; */
`;
