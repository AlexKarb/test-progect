import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegUser, FaRegHourglass } from 'react-icons/fa';
import { FiSettings, FiArchive } from 'react-icons/fi';
import { HiOutlineDocumentAdd, HiOutlineShoppingCart } from 'react-icons/hi';
import { VscGraph } from 'react-icons/vsc';

export const Container = styled.nav`
  padding: 14px 14px 0 14px;
  overflow-y: auto;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(Link)`
  margin-bottom: 12px;
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  margin-left: 12px;
`;

export const IconProfile = styled(FaRegUser)`
  width: 20px;
  height: 20px;
`;
export const IconAdmin = styled(FiSettings)`
  width: 20px;
  height: 20px;
`;
export const IconCreate = styled(HiOutlineDocumentAdd)`
  width: 22px;
  height: 22px;
`;
export const IconPending = styled(HiOutlineShoppingCart)`
  width: 20px;
  height: 20px;
`;
export const IconInProgress = styled(FaRegHourglass)`
  width: 20px;
  height: 20px;
`;
export const IconArchive = styled(FiArchive)`
  width: 20px;
  height: 20px;
`;
export const IconStatistic = styled(VscGraph)`
  width: 22px;
  height: 22px;
`;
