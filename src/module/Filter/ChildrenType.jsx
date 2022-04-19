import { Formik } from 'formik';
import { CheckBox } from 'module/Utils/CheckBox/CheckBox';
import { useEffect } from 'react';
import { AddBox, BabyIcon } from './Filter.styled';

export const ChildrenType = ({ toggleFilter, filter }) => {
  const handleClick = e => toggleFilter(e.target.value);

  useEffect(() => {
    return async () => {
      await toggleFilter('clothes_child', { deteleValue: true });
      await toggleFilter('children_food', { deteleValue: true });
      await toggleFilter('diapers', { deteleValue: true });
    };
  }, []);

  return (
    <Formik initialValues={{ filter }}>
      <AddBox>
        <BabyIcon />

        <CheckBox
          value={'clothes_child'}
          label={'одяг'}
          name="filter"
          onClick={handleClick}
        />

        <CheckBox
          value={'children_food'}
          label={'їжа'}
          name="filter"
          onClick={handleClick}
        />

        <CheckBox
          value={'diapers'}
          label={'підгузки'}
          name="filter"
          onClick={handleClick}
        />
      </AddBox>
    </Formik>
  );
};
