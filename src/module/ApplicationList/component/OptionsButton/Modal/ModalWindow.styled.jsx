import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';

export const CloseButton = styled(IoIosCloseCircleOutline)`
  color: #abbaf7;
  position: absolute;
  top: 9px;
  right: 9px;
  width: 30px;
  height: 31px;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &:hover {
    color: #5e5e5e;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const Container = styled.div`
  background-color: white;
  width: 300px;
  padding: 30px 15px;
  text-align: center;
`;
export const Title = styled.p`
  font-size: 20px;
  padding: 15px 25px;
  color: white;
  background-color: #5b7de1;
`;

export const Text = styled.div`
  margin-bottom: 30px;
  font-size: 20px;
`;

export const ButtonWrapper = styled.div`
  width: 180px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
export const Button = styled.button.attrs(prop => ({
  type: 'button',
}))`
  width: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: ${({ action, agree, disagree }) => {
    if ((agree && action !== 'deleted') || (disagree && action === 'deleted')) {
      return 'var(--first-color-bg)';
    } else {
      return 'var(--main-text-color)';
    }
  }};

  border: none;
  padding: 8px 0;
  border-radius: 5px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
`;

export const ModalContainer = styled.div``;