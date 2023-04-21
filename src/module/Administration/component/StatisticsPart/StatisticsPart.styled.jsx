import styled from 'styled-components';
import { FaQuestionCircle } from 'react-icons/fa';
import { InfoWrap } from '../Info/Info.styled';

export const Container = styled.div`
  font-size: 14px;
  color: #fff;
  margin-bottom: 40px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    padding: 20px 0;
  }

  @media screen and (min-width: 1024px) {
    width: 690px;
    display: flex;
    font-size: 12px;
    justify-content: space-between;
  }
`;

export const Item = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: flex-end;

  @media screen and (min-width: 1024px) {
    margin-bottom: 0px;
    margin-right: 30px;
  }
`;

export const TypeAcc = styled.div`
  position: relative;
  margin-left: 8px;
  color: #7eff46;
  font-size: 18px;
`;

export const Number = styled.span`
  position: relative;
  margin-left: 5px;
  color: ${({ color }) => color || '#7eff46 '};
`;

export const QuestionIcon = styled(FaQuestionCircle)`
  position: absolute;
  top: -2px;
  right: -16px;

  color: #ffffff69;
  width: 10px;
  height: 10px;
  cursor: pointer;

  &:hover ~ ${InfoWrap} {
    opacity: 1;
    visibility: visible;
  }
`;
