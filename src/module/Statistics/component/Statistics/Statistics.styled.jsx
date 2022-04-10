import styled from 'styled-components';
import {
  FcDatabase,
  FcDataBackup,
  FcAcceptDatabase,
  FcDeleteDatabase,
  FcConferenceCall,
} from 'react-icons/fc';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin-bottom: 25px;
  background-color: var(--first-color-bg);
  padding: 10px;
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 340px;
  margin: 0 auto;
`;
export const BoxContainer = styled.div`
  position: relative;
  width: ${({ width }) => (width ? width : '160px')};
  height: 120px;
  /* background-color: ${({ color }) => color}; */
  background-color: white;
  box-shadow: 2px 5px 8px 0px #c7c7c79e;
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

export const IconActive = styled(FcDatabase)`
  width: 50px;
  height: 50px;
`;
export const IconInProgress = styled(FcDataBackup)`
  width: 50px;
  height: 50px;
`;
export const IconDone = styled(FcAcceptDatabase)`
  width: 50px;
  height: 50px;
`;

export const IconDeleted = styled(FcDeleteDatabase)`
  width: 50px;
  height: 50px;
`;

export const IconTotal = styled(FcConferenceCall)`
  width: 50px;
  height: 50px;
`;
