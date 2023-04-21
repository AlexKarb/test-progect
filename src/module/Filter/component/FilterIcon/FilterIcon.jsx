import styled from 'styled-components';
import { BiFilterAlt } from 'react-icons/bi';

export const FilterIcon = styled(BiFilterAlt).attrs(pr => ({
  color: pr.isopen === 'true' ? 'var(--unactive-color-bg)' : 'white',
}))`
  width: 25px;
  height: 25px;
  position: absolute;
  right: 24px;
  top: 12px;
  color: white;

  ${({ type }) => {
    if (type === 'completed' || type === 'deleted') {
      return 'top: 70px; right: 12px;';
    }
  }}

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 36px;
    height: 36px;
    right: 15px;
    top: 15px;

    ${({ type }) => {
      if (type === 'completed' || type === 'deleted') {
        return 'top: 80px;';
      }
    }}
  }

  @media screen and (min-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;
