import styled, { keyframes } from 'styled-components';
import { MdOutlineVolunteerActivism } from 'react-icons/md';
import { FaRegHeart } from 'react-icons/fa';
import { ReactComponent as UaFlag } from 'static/media/uaFlag.svg';

export const LogoContainer = styled.div`
  position: relative;
  width: 38px;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;

  @media screen and (min-width: 768px) {
    width: 60px;
  }
`;

export const UaLogo = styled(UaFlag)`
  width: 100%;
  height: 100%;
`;

export const Arm = styled(MdOutlineVolunteerActivism)`
  width: 35px;
  height: 35px;
  color: white;
`;

export const WhiteBlock = styled.div`
  top: 16px;
  left: 23px;
  position: absolute;
  width: 27px;
  height: 20px;
  border-radius: 0 0 60px 60px;
  background-color: var(--main-color-bg);
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
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  color: white;
  transform: scale(1) translate(-50%, -31%);
  animation: 2s ${pulseRed} infinite;
`;
