import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Label = styled.span`
  margin-right: 10px;
  width: 78px;

  @media screen and (min-width: 1024px) {
    width: 100px;
  }
`;

export const TypeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 220px;
  }

  @media screen and (min-width: 1024px) {
    width: 340px;
  }
`;
export const TypeItem = styled.li`
  list-style: none;
  margin-right: 10px;
  background: ${({ type }) => {
    switch (type) {
      case 'одяг для дорослих':
        return '#e2be4762';
      case 'одяг для дітей':
        return '#e2474776';
      case 'їжа':
        return '#4bff8161';
      case 'дитяче харчування':
        return '#4cc5f56b';
      case 'підгузки':
        return '#ff70f382';
      case 'засоби гігієни':
        return '#9a9ffc97';
      case 'інший тип':
        return '#4f726b80';

      default:
        return '#53d6ba73';
    }
  }};
  padding: 2px 10px;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 6px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;
