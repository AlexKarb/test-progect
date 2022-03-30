import { useEffect } from 'react';
import { Container, Label, Line } from './Filter.styled';

const Filter = ({ setFilter, filter }) => {
  const handleClick = e => {
    const value = e.target.name;
    const haveMatch = filter.find(filterValue => filterValue === value);

    if (haveMatch) {
      setFilter(prS => prS.filter(filterValue => filterValue !== value));
    } else {
      setFilter(prS => [...prS, value]);
    }
  };

  return (
    <>
      <Container>
        <Label>
          <input onClick={handleClick} type="checkbox" name="Транспорт" />
          Транспорт
        </Label>
        <Label>
          <input onClick={handleClick} type="checkbox" name="Іжа/Ліки/Одяг" />
          Іжа/Ліки/Одяг
        </Label>
        <Label>
          <input onClick={handleClick} type="checkbox" name="Медицина" />{' '}
          Медицина
        </Label>
        <Label>
          <input onClick={handleClick} type="checkbox" name="Тварини" /> Тварини
        </Label>
        <Label>
          <input onClick={handleClick} type="checkbox" name="Інше" />
          Інше
        </Label>
      </Container>
      <Line />
      <Container>
        <Label>
          <input onClick={handleClick} type="checkbox" name="pending" />У роботі
        </Label>
        <Label>
          <input onClick={handleClick} type="checkbox" name="done" />
          Заявка виконана
        </Label>
        <Label>
          <input onClick={handleClick} type="checkbox" name="idle" />
          Актуальне
        </Label>
        <Label>
          <input onClick={handleClick} type="checkbox" name="delete" />
          Видалене
        </Label>
      </Container>
      <Line />
    </>
  );
};

export default Filter;
