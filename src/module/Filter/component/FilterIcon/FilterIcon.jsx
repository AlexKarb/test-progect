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

  @media screen and (min-width: 768px) {
    position: absolute;
    width: 36px;
    height: 36px;
    right: 15px;
    top: 15px;
  }
`;
