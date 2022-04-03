import styled, { keyframes } from 'styled-components';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';

export const HeaderContainer = styled.div`
  height: 58px;
  border-bottom: 1px solid var(--main-color-bg);
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding: 0 10px;
`;

export const Logotype = styled.div`
  position: relative;
  width: 55px;
  height: 55px;
  display: flex;
  padding: 5px;
  align-items: flex-end;
  justify-content: center;
`;

export const Arm = styled(MdOutlineVolunteerActivism)`
  width: 35px;
  height: 35px;
`;

export const WhiteBlock = styled.div`
  top: 16px;
  left: 23px;
  position: absolute;
  width: 27px;
  height: 20px;
  border-radius: 0 0 60px 60px;
  background-color: white;
`;

const pulseRed = keyframes`
  0% {
    transform: scale(1);
    
  }

  25% {
    transform: scale(1.2);
  }
  
  50% {
    transform: scale(1);
  
  }
  
  100% {
    transform: scale(1);
  
  }
`;

export const Heart = styled(FaRegHeart)`
  top: 13px;
  left: 23px;
  position: absolute;
  width: 20px;
  height: 20px;
  color: red;
  transform: scale(1);
  animation: 2s ${pulseRed} infinite;
`;
