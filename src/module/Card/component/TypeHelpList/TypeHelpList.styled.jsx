import styled from 'styled-components';

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
  align-items: center;
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  /* @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  } */
`;
export const TypeItem = styled.li`
  list-style: none;
  margin-right: 10px;
  background: ${({ color }) => {
    switch (color) {
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
  padding: 4px 10px;
  text-align: center;
  border-radius: 30px;
  margin-bottom: 6px;
  font-size: 12px;

  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
    padding: 6px 18px;
    font-size: 16px;
  }
`;
