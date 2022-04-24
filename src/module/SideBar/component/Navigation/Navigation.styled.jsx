import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaRegHourglass } from 'react-icons/fa';
import { FiSettings, FiArchive } from 'react-icons/fi';
import { HiOutlineDocumentAdd, HiOutlineShoppingCart } from 'react-icons/hi';
import { MdOutlineAnalytics } from 'react-icons/md';
import { BiHomeSmile } from 'react-icons/bi';

export const Container = styled.nav`
  padding: 28px 0 0 0;
  overflow-y: auto;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LinkMenu = styled(Link)`
  margin-bottom: 8px;

  text-decoration: none;
  color: #2ccac1;
  display: flex;
  align-items: center;
  padding: 10px 28px 10px 14px;

  &:hover,
  &:active {
    background-color: var(--hover-color-bg);
  }
`;

export const Label = styled.span`
  margin-left: 17px;
  color: white;
`;

export const IconContainer = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconHome = styled(BiHomeSmile)`
  width: 27px;
  height: 27px;
`;
export const IconCreate = styled(HiOutlineDocumentAdd)`
  width: 26px;
  height: 26px;
`;
export const IconPending = styled(HiOutlineShoppingCart)`
  width: 26px;
  height: 26px;
`;
export const IconInProgress = styled(FaRegHourglass)`
  width: 21px;
  height: 21px;
`;
export const IconArchive = styled(FiArchive)`
  width: 23px;
  height: 23px;
`;
export const IconStatistic = styled(MdOutlineAnalytics)`
  width: 26px;
  height: 26px;
`;
export const IconAdmin = styled(FiSettings)`
  width: 22px;
  height: 22px;
`;
