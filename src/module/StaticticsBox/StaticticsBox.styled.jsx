import styled from 'styled-components';

export const BoxContainer = styled.div`
  position: relative;

  width: ${({ size }) => {
    switch (size) {
      case 'small':
        return '140px';

      case 'medium':
        return '160px';

      case 'large':
        return '100%';
      default:
        return '160px';
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '100px';

      default:
        return '120px';
    }
  }};

  background-color: white;
  box-shadow: ${({ size }) =>
    size === 'small' ? 'none' : '  2px 5px 8px 0px #c7c7c79e;'};
  border-radius: 3px;
  margin-bottom: 25px;
  padding: 4px;
  color: #001f85;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.p`
  position: absolute;
  top: 6px;
  left: 8px;
  font-size: 14px;
  color: #a7a7a7;
  text-transform: uppercase;
`;

export const BoxBlock = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: baseline; */
`;

export const BoxBlock2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  padding-top: 4px;
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 1;
`;

export const Text = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  color: #afa5c1;
`;
