import styled from 'styled-components';
import { FaRegHourglass } from 'react-icons/fa';
import { FiSettings, FiArchive } from 'react-icons/fi';
import { HiOutlineDocumentAdd, HiOutlineShoppingCart } from 'react-icons/hi';
import { MdOutlineAnalytics } from 'react-icons/md';
import { BiHomeSmile } from 'react-icons/bi';

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
