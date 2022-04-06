import styled from 'styled-components';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { HiCheck } from 'react-icons/hi';
import { FaBus } from 'react-icons/fa';
import {
  // FiEdit,
  FiEdit2,
  FiPhoneCall,
} from 'react-icons/fi';
import { FaRegHourglass } from 'react-icons/fa';

export const IconBlock = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 10px;

  /* * {
    outline: 1px solid red;
  } */
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #808080;
`;

export const IconInfo = styled.div`
  display: none;
  position: absolute;
  left: -65px;
  top: -6px;
  width: 60px;
  padding: 3px;
  border: 1px solid #0b0909;
  box-shadow: 3px 3px 5px #00000033;
  font-size: 8px;
  border-radius: 5px;
  background-color: #fff;
`;

export const WaitIcon = styled(FaRegHourglass)`
  /* margin-bottom: 15px; */
  width: 16px;
  height: 16px;

  &:hover {
    color: yellow;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const DoneIcon = styled(HiCheck)`
  /* margin-bottom: 15px; */
  width: 18px;
  height: 18px;

  &:hover {
    color: green;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const EditIcon = styled(FiEdit2)`
  padding: 2px;
  /* margin-bottom: 15px; */
  width: 18px;
  height: 18px;

  cursor: pointer;

  &:hover {
    color: blue;
  }

  &:hover ~ * {
    display: block;
  }
`;
export const DeleteIcon = styled(TiUserDeleteOutline)`
  /* margin-bottom: 15px; */
  width: 18px;
  height: 18px;

  &:hover {
    color: red;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const Delivery = styled.div`
  /* position: absolute;
  top: 8px;
  right: 10px; */
`;

export const DeliveryIcon = styled(FaBus)`
  color: green;
  width: 16px;
  height: 16px;
  /* margin-bottom: 25px; */
  /* padding: 2px; */
  cursor: pointer;

  &:hover ~ * {
    display: block;
  }
`;

export const CallIcon = styled(FiPhoneCall)`
  width: 16px;
  height: 16px;
  /* margin-bottom: 25px; */
  /* padding: 2px; */
  cursor: pointer;

  &:hover ~ * {
    display: block;
  }
`;
