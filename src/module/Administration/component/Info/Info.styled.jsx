import styled from 'styled-components';

export const InfoWrap = styled.div`
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 30px;

  left: 50%;
  transform: translateX(-30%);
  z-index: 2;
  width: 240px;

  transition: all 0.5s;

  padding: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 2px 2px 16px #00000082;
  color: #00000082;

  @media screen and (min-width: 412px) {
  }

  @media screen and (min-width: 768px) {
    top: 15px;
    left: 65px;
    transform: none;
    width: ${({ size }) => {
      switch (size) {
        case 'small':
          return '270px';

        case 'medium':
          return '350px';

        default:
          return '240px';
      }
    }};
  }

  @media screen and (min-width: 1024px) {
    ${({ position }) => {
      if (position === 'right') return `top: 30px`;
      if (position === 'left')
        return `top: 20px;
                left: auto;
                right: -12px;`;
    }}
  }
`;
export const InfoText = styled.div`
  font-size: 12px;
  margin-bottom: 3px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 12px;
  }
`;

export const InfoSubText = styled.p`
  color: #00000055;
  font-size: 11px;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    margin-left: 8px;
  }
`;
