import styled from 'styled-components';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiCheck, HiOutlineShoppingCart } from 'react-icons/hi';
import { FiEdit2, FiPhoneCall } from 'react-icons/fi';
import { FaRegHourglass } from 'react-icons/fa';
import { MdOutlineDeliveryDining } from 'react-icons/md';

export const DeliveryIcon = styled(MdOutlineDeliveryDining)`
  color: ${({ type }) => type && 'green'};
  width: 22px;
  height: 22px;

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

  &:hover {
    color: #10af02;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const PendingIcon = styled(HiOutlineShoppingCart)`
  width: 19px;
  height: 19px;
  color: ${({ type }) => (type === 'true' ? 'var(--first-color-bg)' : null)};

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const WaitIcon = styled(FaRegHourglass)`
  width: 16px;
  height: 16px;
  color: ${({ type }) => (type === 'true' ? 'var(--first-color-bg)' : null)};

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const DoneIcon = styled(HiCheck)`
  width: 18px;
  height: 18px;
  color: ${({ type }) => (type === 'true' ? 'var(--first-color-bg)' : null)};

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const EditIcon = styled(FiEdit2)`
  width: 16px;
  height: 16px;

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 19px;
  height: 19px;
  color: ${({ type }) => (type === 'true' ? 'var(--first-color-bg)' : null)};

  &:hover {
    color: #000;
  }
  &:hover ~ * {
    display: block;
  }
`;

export const TelLink = styled.a`
  color: inherit;
  display: flex;

  &:hover ~ * {
    display: block;
  }
`;
