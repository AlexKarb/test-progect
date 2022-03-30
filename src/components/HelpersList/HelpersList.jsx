import Filter from 'components/Filter/Filter';
// import { ModalW } from 'components/Modal/Modal';
import { getPublicationOfHelper } from 'components/Service/api-service';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  List,
  LeftSide,
  IconBlock,
  Delivery,
  Item,
  Data,
  Info,
  Container,
  IconContainer,
  Label,
  TypeList,
  EditIcon,
  TypeItem,
  DeliveryIcon,
  Title,
  IconInfo,
  RightSide,
  DeleteIcon,
} from './HelpersList.styled';

const HelpersList = ({ data, openModal }) => {
  return (
    <List>
      {data.map(
        ({
          name,
          contact,
          info,
          type,
          typeOther,
          id,
          location,
          delivery,
          status,
        }) => (
          <Item key={id}>
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
                <IconInfo>присутня (часткова) доставка</IconInfo>
              </Delivery>
            )}

            <IconBlock>
              <IconContainer>
                <EditIcon />
                <IconInfo>Редагувати</IconInfo>
              </IconContainer>
              <IconContainer>
                <DeleteIcon onClick={openModal} />
                <IconInfo>
                  {status === 'delete' ? 'Відновити ' : 'Видалити '}
                </IconInfo>
              </IconContainer>
            </IconBlock>
          </Item>
        )
      )}
    </List>
  );
};

const Helpers = () => {
  const [filters, setFilter] = useState([]);
  const [data, setData] = useState([]);

  const [modalIsOpen, setIsOpen] = useOutletContext();

  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data);
    const filteredItems = data?.filter(({ type }) =>
      filters.every(filter => type.includes(filter))
    );
    setItems(filteredItems);
  }, [data, filters]);

  useEffect(() => {
    getPublicationOfHelper().then(setData);
  }, []);

  return (
    <>
      {console.log('~ modalIsOpen', modalIsOpen)}
      <Filter setFilter={setFilter} filter={filters} />
      {/* <ModalW
        onClose={() => setIsOpen(false)}
        elements={<>Modal</>}
        open={modalIsOpen}
      /> */}
      {items && <HelpersList data={items} openModal={() => setIsOpen(true)} />}
    </>
  );
};

export default Helpers;
