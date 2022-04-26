import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiCheck } from 'react-icons/hi';

export const Container = styled.main`
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
  background-color: #2857e2;
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
  }

  &:first-child {
    margin-bottom: 25px;
  }
`;

export const DoneIcon = styled(HiCheck)`
  width: 50px;
  height: 50px;
  color: white;
  margin-right: 15px;
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 50px;
  height: 50px;
  color: white;
  margin-right: 15px;
`;
