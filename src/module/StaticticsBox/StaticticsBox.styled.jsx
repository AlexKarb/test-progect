import styled from 'styled-components';

export const BoxContainer = styled.div`
  position: relative;
  width: ${({ size }) => {
    switch (size) {
      case 'medium':
        return '140px';

      case 'large':
        return '300px';
      default:
        return '160px';
    }
  }};
  height: 120px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #ffffffed;
  border-radius: 3px;
  margin-bottom: 25px;
  color: #001f85;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    height: 105px;

    width: ${({ size }) => {
      switch (size) {
        case 'medium':
          return '255px';

        case 'large':
          return '700px';
        default:
          return '295px';
      }
    }};
  }

  @media screen and (min-width: 1024px) {
    width: ${({ size }) => {
      switch (size) {
        case 'medium':
          return '120px';

        case 'large':
          return '150px';
        default:
          return '295px';
      }
    }};
    height: ${({ size }) => {
      switch (size) {
        case 'medium':
          return '80px';

        case 'large':
          return '80px;';
        default:
          return '100px;';
      }
    }};

    display: flex;

    flex-direction: column;
    align-items: ${({ size }) => (size === 'medium' ? ' center' : '')};
    margin-bottom: ${({ size }) => (size === 'large' ? '12px' : '')};
  }

  @media screen and (min-width: 1250px) {
    width: ${({ size }) => {
      switch (size) {
        case 'medium':
          return '160px';

        case 'large':
          return '160px';
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
    font-size: 15px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 10px;
  }
`;

export const Wrapp = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0;

  @media screen and (min-width: 768px) {
    padding: 2px 0;
  }

  @media screen and (min-width: 1024px) {
    align-items: ${({ size }) => (size === 'medium' ? 'flex-end' : '')};
    /* padding: ${({ size }) => (size === 'large' ? '4px 0' : '12px 0')}; */
    padding: 10px 0 0 0;
  }
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

  @media screen and (min-width: 1024px) {
    align-items: center;
    margin-left: 8px;
  }
`;

export const Number = styled.p`
  font-weight: 700;
  font-size: 30px;
  line-height: 1;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 2px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${({ size }) => (size === 'medium' ? '20px' : '26px')};
  }
`;

export const Text = styled.span`
  text-transform: uppercase;
  font-size: 9px;
  color: #afa5c1;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 8px;
  }
`;

export const IconContainer = styled.div`
  height: 50px;
  width: 50px;

  @media screen and (min-width: 768px) {
    height: 40px;
    width: 40px;
  }

  @media screen and (min-width: 1024px) {
    height: ${({ size }) => (size === 'medium' ? '38px' : '40px')};

    width: ${({ size }) => (size === 'medium' ? '30px' : '40px')};
  }
`;
