import styled from 'styled-components';
import { FiChevronDown } from 'react-icons/fi';

export const Block = styled.div`
  padding: 15px 0;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Label = styled.span`
  margin-right: 5px;
  color: #808080;
  flex-shrink: 0;
  font-size: 10px;
`;
export const DataLabel = styled.span`
  margin-right: 5px;
  color: #808080;
  flex-shrink: 0;
  font-size: 10px;
  width: 115px;
`;
export const Info = styled.p`
  font-size: 10px;
  padding: 2px 0;
`;
export const DataInfo = styled.p`
  font-size: 9px;
  padding: 2px 0;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--first-color-bg);
  border: none;
  padding: 8px 0;
  padding-left: 4px;
  padding-right: 14px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  width: 110px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 14px;
`;

export const DownLine = styled(FiChevronDown)`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  transform: ${({ isopen }) => isopen};
`;

export const Comment = styled.div`
  padding: 6px;
  border: 1px solid teal;
  margin-top: 8px;
  border-radius: 3px;
  font-size: 11px;
  width: 100%;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin-top: 10px;
`;
