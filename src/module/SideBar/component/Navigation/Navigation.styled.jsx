import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegUser, FaRegHourglass } from 'react-icons/fa';
import { FiSettings, FiArchive } from 'react-icons/fi';
import { HiOutlineDocumentAdd, HiOutlineShoppingCart } from 'react-icons/hi';
import { VscGraph } from 'react-icons/vsc';

export const Container = styled.nav`
  padding: 28px 14px 0 6px;
  overflow-y: auto;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(Link)`
  margin-bottom: 8px;
  text-decoration: none;
  color: var(--main-text-color);
  display: flex;
  align-items: center;
  padding: 10px 8px;
  border-radius: 12px;

  &:hover,
  &:active {
    background-color: var(--hover-color-bg);
  }
`;

export const Label = styled.span`
  margin-left: 17px;
`;

export const IconProfile = styled(FaRegUser)`
  width: 23px;
  height: 23px;
`;
export const IconCreate = styled(HiOutlineDocumentAdd)`
  width: 26px;
  height: 26px;
`;
export const IconPending = styled(HiOutlineShoppingCart)`
  width: 25px;
  height: 25px;
`;
export const IconInProgress = styled(FaRegHourglass)`
  width: 23px;
  height: 23px;
`;
export const IconArchive = styled(FiArchive)`
  width: 24px;
  height: 24px;
`;
export const IconStatistic = styled(VscGraph)`
  width: 27px;
  height: 27px;
`;
export const IconAdmin = styled(FiSettings)`
  width: 25px;
  height: 25px;
`;
