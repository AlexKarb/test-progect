import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineDelete } from 'react-icons/ai';
import { HiCheck } from 'react-icons/hi';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 15px;
  position: relative;
  margin: 0 auto;
  max-width: 300px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    max-width: 650px;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 700px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1200px;
  }

  &::after {
    content: '';
    z-index: 2;
    bottom: -17px;
    position: absolute;
    background-color: #ffffffda;
    width: calc(100% / 2 - 15px);
    height: 3px;
    border-radius: 20px;
    left: 2px;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: linear;

    transform: ${({ active }) => {
      return active ? 'translateX(0%)' : 'translateX(120%)';
    }};

    @media screen and (min-width: 768px) {
      transform: ${({ active }) => {
        return active ? 'translateX(0%)' : 'translateX(109%)';
      }};
    }

    @media screen and (min-width: 1024px) {
      transform: ${({ active }) => {
        return active ? 'translateX(0%)' : 'translateX(108%)';
      }};
    }

    @media screen and (min-width: 1440px) {
      transform: ${({ active }) => {
        return active ? 'translateX(0%)' : 'translateX(105%)';
      }};
    }
  }
`;

export const ArchiveLink = styled(Link)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 40px;

  color: var(--first-color-bg);
  background-color: ${({ active }) => (active ? '#ffffffda' : '#ffffff51')};
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  text-decoration: none;
  font-weight: 500;

  cursor: pointer;

  @media screen and (min-width: 1024px) {
    font-weight: 700;
    height: 35px;
  }

  &:hover {
    transform: scale(1.02);
  }

  &:first-child {
    margin-right: 25px;
  }

  ${({ active }) => active && 'pointer-events: none;'}
`;

export const Text = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const DoneIcon = styled(HiCheck)`
  width: 30px;
  height: 30px;
  color: var(--first-color-bg);
  margin-right: 30px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;

  @media screen and (min-width: 768px) {
    left: 10px;
    transform: translate(0, -50%);
  }
  @media screen and (min-width: 1024px) {
    width: 25px;
    height: 25px;
  }
`;

export const DeleteIcon = styled(AiOutlineDelete)`
  width: 30px;
  height: 30px;
  color: var(--first-color-bg);
  margin-right: 30px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 50%;

  @media screen and (min-width: 768px) {
    left: 10px;
    transform: translate(0, -50%);
  }
  @media screen and (min-width: 1024px) {
    width: 25px;
    height: 25px;
  }
`;
