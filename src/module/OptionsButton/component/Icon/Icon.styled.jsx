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

  width: 100%;
  height: 100%;

  &:hover {
    color: #000;
  }
`;

export const CallIcon = styled(FiPhoneCall)`
  padding: 3px;
  width: 100%;
  height: 100%;

  &:hover {
    color: #10af02;
  }
`;

export const PendingIcon = styled(HiOutlineShoppingCart)`
  padding: 1.5px;
  width: 100%;
  height: 100%;
  color: ${({ type }) => (type === 'true' ? 'var(--first-color-bg)' : null)};

  &:hover {
    color: #000;
  }
`;

export const WaitIcon = styled(FaRegHourglass)`
  padding: 3px;
  width: 100%;
  height: 100%;
  color: ${({ type }) => (type === 'true' ? 'var(--first-color-bg)' : null)};

  &:hover {
    color: #000;
  }
`;

export const DoneIcon = styled(HiCheck)`
  width: 100%;
  height: 100%;
  color: ${({ type }) => (type === 'true' ? 'var(--first-color-bg)' : null)};

  &:hover {
    color: #000;
  }
`;

export const EditIcon = styled(FiEdit2)`
  padding: 2px;
  width: 100%;
  height: 100%;

  &:hover {
    color: #000;
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 19px;
  height: 19px;
  width: 100%;
  height: 100%;
  color: ${({ type }) => (type === 'true' ? 'var(--first-color-bg)' : null)};

  &:hover {
    color: #000;
  }
`;

export const TelLink = styled.a`
  color: inherit;
  display: flex;
`;

export const IconContainer = styled.div`
  width: 22px;
  height: 22px;

  @media screen and (min-width: 768px) {
    width: 26px;
    height: 26px;
  }
`;
