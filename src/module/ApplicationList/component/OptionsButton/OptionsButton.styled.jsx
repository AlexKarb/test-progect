import styled from 'styled-components';
import { TiUserDeleteOutline } from 'react-icons/ti';
import { HiCheck, HiOutlineShoppingCart } from 'react-icons/hi';
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
  /* flex-direction: column; */
  justify-content: space-between;
  padding: 5px 10px;
  /* height: 250px; */

  /* * {
    outline: 1px solid red;
  } */

  @media screen and (min-width: 768px) {
    width: 300px;
    flex-direction: row;
    flex-wrap: wrap;
    position: absolute;
    top: 10px;
    right: 5px;

    /* width: 220px; */
  }
`;

export const IconContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #b9b9b9;
  padding: 0;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
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

export const TelLink = styled.a`
  color: inherit;
`;

export const DeliveryIcon = styled(FaBus)`
  color: ${({ delivery }) => delivery && 'green'};
  width: 16px;
  height: 16px;
  /* margin-bottom: 25px; */

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const CallIcon = styled(FiPhoneCall)`
  width: 16px;
  height: 16px;
  /* margin-bottom: 25px; */

  &:hover {
    color: #10af02;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const IconPending = styled(HiOutlineShoppingCart)`
  width: 19px;
  height: 19px;
  color: ${({ type }) => (type === 'pending' ? '#1b00be' : null)};

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const WaitIcon = styled(FaRegHourglass)`
  /* margin-bottom: 15px; */
  width: 16px;
  height: 16px;
  color: ${({ type }) => (type === 'in progress' ? '#1b00be' : null)};

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const DoneIcon = styled(HiCheck)`
  /* margin-bottom: 15px; */
  width: 18px;
  height: 18px;
  color: ${({ type }) => (type === 'completed' ? '#1b00be' : null)};

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const EditIcon = styled(FiEdit2)`
  /* margin-bottom: 15px; */
  width: 16px;
  height: 16px;

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;
export const DeleteIcon = styled(TiUserDeleteOutline)`
  /* margin-bottom: 15px; */
  width: 18px;
  height: 18px;
  color: ${({ type }) => (type === 'deleted' ? '#1b00be' : null)};

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;
