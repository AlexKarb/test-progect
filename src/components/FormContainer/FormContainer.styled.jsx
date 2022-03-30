import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  min-width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #51454542;
  background-color: #ffffe4;
  box-shadow: 6px 3px 4px #69636336;
  padding: 20px 50px;
  margin: 20px 5px;

  * {
    margin-bottom: 10px;
  }
`;
