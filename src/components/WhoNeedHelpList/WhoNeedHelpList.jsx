// import Filter from 'components/Filter/Filter';

// import {
//   List,
//   LeftSide,
//   IconBlock,
//   WaitIcon,
//   Delivery,
//   IconContainer,
//   DoneIcon,
//   Item,
//   Data,
//   Info,
//   Container,
//   Label,
//   TypeList,
//   TypeItem,
//   DeliveryIcon,
//   EditIcon,
//   Title,
//   IconInfo,
//   RightSide,
//   DeleteIcon,
// } from 'components/WhoNeedHelpList/HelpersList.styled';
// import { getPendingPublications } from 'components/Service/api-service';
// import { useEffect, useState } from 'react';

// const HelpList = ({ data }) => (
//   <List>
//     {data?.map(
//       ({ name, contact, info, type, typeOther, id, location, delivery }) => (
//         <Item key={id}>
//           <LeftSide>
//             <Container>
//               <Label> Назва/Імя: </Label>
//               <Title>{name}</Title>
//             </Container>
//             <Container>
//               <Label> Контакт: </Label>
//               <Data> {contact}</Data>
//             </Container>
//             <Container>
//               <Label>Тип допомоги :</Label>
//               <TypeList>
//                 {type.map(el => (
//                   <TypeItem key={el} type={el}>
//                     {el}
//                   </TypeItem>
//                 ))}
//                 {typeOther && <Info>{typeOther}</Info>}
//               </TypeList>
//             </Container>
//           </LeftSide>
//           <RightSide>
//             <Container>
//               <Label> Інформація : </Label>
//               <Info>{info}</Info>
//             </Container>
//             <Container>
//               <Label> Локація у Києві : </Label> <Data>{location}</Data>
//             </Container>
//           </RightSide>
//           {delivery.find(el => el === 'true') && (
//             <Delivery>
//               <DeliveryIcon />
//               <IconInfo>Можлива (часткова) самодоставка</IconInfo>
//             </Delivery>
//           )}

//           <IconBlock>
//             <IconContainer>
//               <WaitIcon />
//               <IconInfo>У роботі</IconInfo>
//             </IconContainer>
//             <IconContainer>
//               <DoneIcon />
//               <IconInfo>Заявка виконана</IconInfo>
//             </IconContainer>
//             <IconContainer>
//               <EditIcon />
//               <IconInfo>Редагувати</IconInfo>
//             </IconContainer>
//             <IconContainer>
//               <DeleteIcon />
//               <IconInfo>Видалити</IconInfo>
//             </IconContainer>
//           </IconBlock>
//         </Item>
//       )
//     )}
//   </List>
// );

// const WhoNeedHelpList = () => {
//   const [data, setData] = useState();
//   const [filters, setFilter] = useState([]);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     setItems(data);
//     const filteredItems = data?.filter(({ type }) =>
//       filters.every(filter => type.includes(filter))
//     );
//     setItems(filteredItems);
//   }, [data, filters]);

//   useEffect(() => {
//     getPendingPublications().then(setData);
//   }, []);

//   return (
//     <>
//       <Filter setFilter={setFilter} filter={filters} />
//       {data && <HelpList data={items} />}
//     </>
//   );
// };

// export default WhoNeedHelpList;
