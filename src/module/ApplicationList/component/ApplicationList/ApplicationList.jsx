export const ApplicationList = ({ children }) => {
  return (
    <div>
      {/* <Item key={id}>
        <LeftSide>
          <Container>
            <Label> Назва/Імя: </Label>
            <Title>{name}</Title>
          </Container>
          <Container>
            <Label> Контакт: </Label>
            <Data> {contact}</Data>
          </Container>
          <Container>
            <Label>Тип допомоги :</Label>
            <TypeList>
              {type.map(el => (
                <TypeItem key={el} type={el}>
                  {el}
                </TypeItem>
              ))}
              {typeOther && <Info>{typeOther}</Info>}
            </TypeList>
          </Container>
        </LeftSide>
        <RightSide>
          <Container>
            <Label> Інформація : </Label>
            <Info>{info}</Info>
          </Container>
          <Container>
            <Label> Локація у Києві : </Label> <Data>{location}</Data>
          </Container>
        </RightSide>
        {delivery.find(el => el === 'true') && (
          <Delivery>
            <DeliveryIcon />
            <IconInfo>Можлива (часткова) самодоставка</IconInfo>
          </Delivery>
        )}

        <IconBlock>
          <IconContainer>
            <WaitIcon />
            <IconInfo>У роботі</IconInfo>
          </IconContainer>
          <IconContainer>
            <DoneIcon />
            <IconInfo>Заявка виконана</IconInfo>
          </IconContainer>
          <IconContainer>
            <EditIcon />
            <IconInfo>Редагувати</IconInfo>
          </IconContainer>
          <IconContainer>
            <DeleteIcon />
            <IconInfo>Видалити</IconInfo>
          </IconContainer>
        </IconBlock>
      </Item> */}

      {children}
    </div>
  );
};

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
