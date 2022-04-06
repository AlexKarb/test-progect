import styled from 'styled-components';
//

export const List = styled.ul`
  padding: 30px 0;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    max-width: 880px;
  }

  @media screen and (min-width: 1024px) {
    max-width: 1020px;
  }
`;
export const Item = styled.li`
  position: relative;
  border: 1px solid green;
  list-style: none;
  /* margin: 0 auto; */
  /* margin-right: 15px; */
  margin-bottom: 20px;
  padding: 30px 8px;
  width: 250px;
  box-shadow: 3px 3px 5px #00000033;

  @media screen and (min-width: 768px) {
    width: 330px;
  }
  @media screen and (min-width: 1024px) {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Data = styled.span`
  background: #eefacf;
  padding: 6px 15px;
  min-width: 100px;
  text-align: center;
  border-radius: 12px;
`;

export const Contact = styled.p``;
export const Info = styled.p`
  border: 1px solid teal;
  border-radius: 12px;
  padding: 10px;
  width: 150px;

  @media screen and (min-width: 768px) {
    width: 220px;
  }
  @media screen and (min-width: 1024px) {
    width: 400px;
  }
`;
export const TypeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 220px;
  }

  @media screen and (min-width: 1024px) {
    width: 340px;
  }
`;
export const TypeItem = styled.li`
  list-style: none;
  margin-right: 10px;
  background: ${({ type }) => {
    switch (type) {
      case 'Транспорт':
        return '#e2be47';
      case 'Медицина':
        return '#e24747';
      case 'Тварини':
        return '#4bff81';
      case 'Інше':
        return '#acacac';
      case 'Іжа/Ліки/Одяг':
        return '#ff70f3';

      default:
        return '#53d6ba';
    }
  }};
  padding: 6px 15px;
  text-align: center;
  border-radius: 12px;
  margin-bottom: 3px;
  @media screen and (min-width: 768px) {
    margin-bottom: 8px;
  }
`;
export const Location = styled.p``;

export const Label = styled.span`
  margin-right: 10px;
  width: 78px;

  @media screen and (min-width: 1024px) {
    width: 100px;
  }
`;

export const Title = styled.h2``;

export const RightSide = styled.div`
  @media screen and (min-width: 1024px) {
    width: 450px;
  }
`;
export const LeftSide = styled.div`
  margin-bottom: 10px;
  @media screen and (min-width: 1024px) {
    margin-bottom: 0px;
    margin-right: 30px;
    width: 450px;
  }
`;

export const Block = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;
