import styled from 'styled-components';

export const Data = styled.div`
  font-size: 12px;
  color: ${({ type }) => {
    switch (type) {
      case 'in progress':
        return 'green';

      case 'completed':
        return '#e2be47';

      case 'deleted':
        return 'red';

      default:
        return '#808080';
    }
  }};
`;
