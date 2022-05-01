import styled from 'styled-components';
import { MdOutlineLocationOn } from 'react-icons/md';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Wrap = styled.div`
  margin-bottom: 6px;

  @media screen and (min-width: 2220px) {
    margin-bottom: 10px;
  }
`;

export const Name = styled.p`
  margin: 0;
  margin-bottom: 1px;
  margin-right: 25px;
  font-size: 16px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    font-size: 25px;
    margin-bottom: 4px;
  }

  @media screen and (min-width: 2220px) {
    font-size: 28px;
    margin-bottom: 8px;
  }
`;
export const Tel = styled.p`
  font-size: 12px;
  text-decoration: none;
  color: inherit;
  position: relative;
  width: 100px;
  color: #808080;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    padding-left: 3px;
  }

  @media screen and (min-width: 2220px) {
    font-size: 18px;
  }
`;
export const Adress = styled.p`
  font-size: 14px;
  color: #3f3f3f;
  display: flex;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 2220px) {
    font-size: 20px;
  }
`;

export const AdressIcon = styled(MdOutlineLocationOn)`
  width: 13px;
  height: 13px;
  margin-left: -2px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
