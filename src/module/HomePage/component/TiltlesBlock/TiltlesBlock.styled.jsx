import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const WrapTitle = styled.div`
  width: 260px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;
`;

export const Title = styled.h1`
  font-size: 35px;
  font-weight: 700;
  text-align: end;
  color: white;
  margin-bottom: 12px;
`;
export const SubTitle = styled.p`
  color: #ffff00;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const Heart = styled(FaHeart)`
  color: inherit;
  width: 20px;
  height: 20px;
  margin-left: 6px;
`;
