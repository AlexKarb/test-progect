import styled from 'styled-components';
import { MdOutlineLocationOn } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  font-size: 10px;
`;

export const Wrap = styled.div`
  /* display: flex; */
  margin-bottom: 6px;
`;

export const Name = styled.p`
  margin: 0;
  margin-bottom: 1px;
  margin-right: 25px;
  font-size: 15px;
  font-weight: 700;
`;
export const Tel = styled.p`
  font-size: 10px;
  text-decoration: none;
  color: inherit;
  position: relative;
  width: 100px;
  color: #afafaf;
`;
export const Adress = styled.p`
  font-size: 12px;
  color: #595959;
  display: flex;
  align-items: flex-start;
`;

export const AdressIcon = styled(MdOutlineLocationOn)`
  width: 13px;
  height: 13px;
  margin-left: -1px;
`;
