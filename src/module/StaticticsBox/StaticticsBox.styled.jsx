import styled from 'styled-components';

export const BoxContainer = styled.div`
  position: relative;
  width: ${({ size }) => {
    switch (size) {
      case 'medium':
        return '160px';

      case 'large':
        return '100%';
      default:
        return '160px';
    }
  }};
  height: 120px;
  padding: 6px 8px;
  background-color: white;
  box-shadow: 2px 5px 8px 0px #c7c7c79e;
  border-radius: 3px;
  margin-bottom: 25px;
  color: #001f85;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    height: 185px;
    padding: 16px 18px;
    width: ${({ size }) => {
      switch (size) {
        case 'medium':
          return '295px';

        case 'large':
          return '100%';
        default:
          return '295px';
      }
    }};
  }
`;

export const Name = styled.p`
  font-size: 14px;
  color: #a7a7a7;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;
`;

export const BoxBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 8px;
  padding-top: 4px;

  @media screen and (min-width: 768px) {
    margin-left: 15px;
  }
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 4px;
  }
`;

export const Text = styled.span`
  text-transform: uppercase;
  font-size: 10px;
  color: #afa5c1;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const IconContainer = styled.div`
  height: 50px;
  width: 50px;

  @media screen and (min-width: 768px) {
    height: 90px;
    width: 90px;
  }
`;
