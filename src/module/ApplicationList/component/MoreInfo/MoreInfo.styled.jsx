import styled from 'styled-components';
import { FaAngleDown } from 'react-icons/fa';

export const Block = styled.div`
  padding: 15px 0;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  font-size: 12px;
  /* padding: 1px 0; */
`;

export const Label = styled.span`
  margin-right: 5px;
  color: #808080;
  flex-shrink: 0;
  font-size: 10px;
`;

export const Info = styled.p`
  padding: 2px 0;
`;

export const Button = styled.button`
  cursor: pointer;
  background-color: var(--first-color-bg);
  border: none;
  padding: 6px 0;
  padding-left: 8px;
  padding-right: 18px;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  width: 160px;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 14px;

  //

  position: absolute;
  bottom: 5px;
`;

export const DownLine = styled(FaAngleDown)`
  width: 18px;
  height: 18px;
  margin-right: 4px;
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
  font-size: 12px;
  margin-top: 10px;
  padding-right: 35px;
`;
