import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiCheck } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 375px;
  justify-content: center;
  align-items: center;
  padding: 60px 15px;
  margin: 0 auto;
`;

export const ArchiveLink = styled(Link)`
  width: 230px;
  height: 77px;
  padding: 4px 26px 4px 20px;
  color: white;
  background-color: #2856e2d5;
  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
  text-decoration: none;
  font-weight: 700;

  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    background-color: #2856e2ed;
  }

  &:first-child {
    margin-bottom: 25px;
  }

  @media screen and (min-width: 768px) {
    width: 330px;
    height: 95px;
    font-size: 30px;

    &:first-child {
      margin-bottom: 60px;
      margin-top: 60px;
    }
  }

  @media screen and (min-width: 1024px) {
    height: 60px;
    font-size: 20px;
    padding: 4px 26px 4px 10px;
  }
`;

export const DoneIcon = styled(HiCheck)`
  width: 50px;
  height: 50px;
  color: white;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    margin-right: 26px;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 25px;
    width: 40px;
    height: 40px;
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 50px;
  height: 50px;
  color: white;
  margin-right: 15px;

  @media screen and (min-width: 768px) {
    margin-right: 26px;
  }

  @media screen and (min-width: 1024px) {
    margin-right: 25px;
    width: 40px;
    height: 40px;
  }
`;
