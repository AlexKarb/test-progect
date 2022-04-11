import styled from 'styled-components';

export const Data = styled.div`
  font-size: 12px;
  margin-bottom: 4px;
  color: #808080;
  display: flex;
  /* color: ${({ type }) => {
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
  }}; */
`;

export const Block = styled.div`
  border-left: 1px solid red;
  margin-left: 28px;
  padding-left: 6px;
  position: absolute;
  display: ${({ isOpen }) => isOpen};
  background-color: white;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
`;
export const Title = styled.p`
  display: flex;
`;
export const Text = styled.span`
  display: flex;
`;

export const DataItem = styled.div`
  /* font-size: 12px; */
  margin-bottom: 4px;
  color: #808080;
  display: flex;
`;
